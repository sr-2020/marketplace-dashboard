<template>
  <div id="status-bar"
       v-if="session">
    <div class="container">
      <div class="row">
        <div class="col-m-1 col-t-2 col-d-3 item-wrap">
          <div class="name">{{ session.personName }}</div>
        </div>

        <div
          class="col-m-1 col-t-2 col-d-3 item-wrap"
          :class="{ '--centered': isMobile }"
        >
          {{ session.deploy }}
          <span v-if="isMobile"
                class="status"> </span>
        </div>

        <div v-if="!isMobile"
             class="cos-m-1 col-t-1 col-d-2 item-wrap">
          Игра: {{ session.cycle.isActive ? 'Online' : 'Offline' }}
          <span
            class="status"
            :class="{ offline: !session.cycle.isActive }"
          ></span>
        </div>
        <div class="col-m-1 col-t-1 col-d-2 item-wrap --f-end">
          <div class="icon-wrapper"
               @click="changeTheme">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 14.3321V5.6718L10 1.34167L2.5 5.6718L2.5 14.3321L10 18.6622L17.5 14.3321ZM4.16667 6.63405L10 3.26618L15.8333 6.63405V13.3698L10 16.7377L4.16667 13.3698L4.16667 6.63405ZM10 14.1667C7.69881 14.1667 5.83333 12.3012 5.83333 10C5.83333 7.69882 7.69881 5.83334 10 5.83334C12.3012 5.83334 14.1667 7.69882 14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667ZM12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.50001 10 7.50001C11.3807 7.50001 12.5 8.61929 12.5 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RootMutations } from '@/store/mutations'
import { Options, Vue } from 'vue-class-component'
import HttpAdapter from '@/utils/httpAdapter'
import { Session } from '@/store/types'
import { take } from 'rxjs/operators'

@Options({})
export default class StatusBar extends Vue {
  private isMobile_ = false

  set isMobile(bool: boolean) {
    this.isMobile_ = bool
  }

  get isMobile() {
    return this.isMobile_
  }


  get session(): Session | null {
    return this.$store.state.session
  }


  created() {
    this.isMobile_ = window.innerHeight < 667
    window.addEventListener('resize', this.resizeEventHandler.bind(this))
    this.resized()
  }

  mounted() {
    this.updateSession()
  }

  destroyed() {
    window.removeEventListener('resize', this.resizeEventHandler.bind(this))
  }

  updateSession() {
    HttpAdapter.get<Session>(['a-session'])
      .pipe(take(1))
      .subscribe(({ data: session }) => {
        this.$store.commit(RootMutations.SET_SESSION, session)
      })
  }

  private resizeEventHandler = () => {
    this.resized()
  }

  changeTheme() {
    this.$store.commit(RootMutations.CHANGE_THEME)
  }

  resized() {
    this.isMobile = window.innerWidth < 667
  }
}
</script>

<style scoped
       lang="less">
#status-bar {
  width: 100%;
  height: 24px;
  background: var(--accent);
}

.row {
  height: 24px;
}

@media screen and (min-width: 1024px) {
  #status-bar,
  .row {
    height: 36px;
  }
}

.name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.status {
  display: inline-block;
  border-radius: 50%;
  height: 12px;
  min-height: 12px;
  width: 12px;
  min-width: 12px;
  margin-left: 4px;
  background: var(--alert-success);

  &.offline {
    background: var(--alert-error);
  }
}

.item-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;

  .icon-wrapper {
    margin-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.--centered {
    justify-content: center;
  }

  &.--f-end {
    justify-content: flex-end;
  }
}

svg {
  cursor: pointer;
  max-height: 16px;
  min-height: 16px;

  path {
    fill: var(--font-prim);
    transition: fill 0.15s ease-in-out;
  }

  &:hover path {
    fill: var(--accent-sec);
  }

  @media screen and (min-width: 1024px) {
    max-height: 24px;
    min-height: 24px;
  }
}
</style>
