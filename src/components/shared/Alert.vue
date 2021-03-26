<template>
  <div class="alert-wrapper">
    <transition-group name="fade" tag="p">
      <div
        class="alert"
        @click="removeAlert(l.id)"
        v-for="l in list"
        :key="l.id"
      >
        <div class="title">{{ l.title }}</div>
        <div class="description">{{ l.msg }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { AlertController } from '@/utils/alertService'
import { LogsMutations } from '@/store/log/mutations'
import { AlertMsg } from '@/store/log/types'
import { Options, Vue } from 'vue-class-component'

interface SelfDestructiveAlertMsg extends AlertMsg {
  timer: number
}

@Options({})
export default class Alert extends Vue {
  list: SelfDestructiveAlertMsg[] = []

  removeAlert(id: number) {
    const listItem = this.list.find((el) => id === el.id)
    if (listItem) {
      clearInterval(listItem.timer)
    }
    this.list = this.list.filter((el) => id !== el.id)
  }

  mounted() {
    AlertController.alert.subscribe((el) => {
      this.logAlert(el)
      this.list = [
        ...this.list,
        {
          ...el,
          timer: setInterval(
            () => this.removeAlert(el.id),
            el.type === 'error' ? 5000 : 1000
          ),
        },
      ]
    })
  }

  logAlert(msg: AlertMsg) {
    this.$store.commit(LogsMutations.LOG_ALERT, msg)
  }
}
</script>

<style lang="less" scoped>
.alert {
  display: flex;
  flex-direction: column;
  min-height: 80px;
  height: 80px;
  cursor: pointer;
  overflow: hidden;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  color: var(--font-prim);
  background-color: var(--alert-warn);
  opacity: 0.8;
  transform: translateX(0px);

  &.error {
    background-color: var(--alert-error);
  }

  &.success {
    background-color: var(--alert-success);
  }

  &:hover {
    height: auto;
    opacity: 1;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    z-index: 10;
    top: 20px;
    right: 20px;
    height: 100vh;
    width: 300px;
    position: fixed;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
