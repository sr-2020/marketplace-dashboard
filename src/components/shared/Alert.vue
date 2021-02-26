<template>
  <div class="alert-wrapper">
    <div class="alert" @click="removeAlert(l.id)" v-for="l in list" :key="l.id">
      <div class="title">{{ l.title }}</div>
      <div class="description">{{ l.msg }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AlertMsg } from "@/utils/alertService";

@Component
export default class Alert extends Vue {
  private list_: AlertMsg[] = [];

  set list(list: AlertMsg[]) {
    this.list_ = list;
  }

  get list(): AlertMsg[] {
    return this.list_;
  }

  removeAlert(id: number) {
    this.list = this.list.filter(el => id !== el.id);
  }

  constructor() {
    super();
  }

  mounted() {
    this.$store.state.alertService.alert.subscribe((el: AlertMsg) => {
      if (!el) {
        return;
      }
      const { id, title, type, msg } = el;
      this.list = [...this.list, { id, title, type, msg }];
    });
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
</style>
