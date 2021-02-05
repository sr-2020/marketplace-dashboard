<template>
  <div id="status-bar">
    <div class="container">
      <div class="row">
        <div class="col-m-1 col-t-2 col-d-3 item-wrap">
          <div class="name">{{ name }}</div>
          <div class="icon-wrapper">
            <svg width="16"
                 height="16"
                 viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999ZM14.0001 7.99999C14.0001 11.3137 11.3138 14 8.00007 14C4.68636 14 2.00007 11.3137 2.00007 7.99999C2.00007 4.68628 4.68636 1.99999 8.00007 1.99999C11.3138 1.99999 14.0001 4.68628 14.0001 7.99999ZM8.66916 9.33222H9.33539V10.6656H6.66873V9.33222H7.33539V7.99889H6.66873V6.66555H8.66916V9.33222ZM8.6672 5.33222C8.6672 5.70041 8.36863 5.99889 8.00032 5.99889C7.63201 5.99889 7.33343 5.70041 7.33343 5.33222C7.33343 4.96403 7.63201 4.66555 8.00032 4.66555C8.36863 4.66555 8.6672 4.96403 8.6672 5.33222Z"
                    fill="white"/>
            </svg>
          </div>
        </div>

        <div class="col-m-1 col-t-2 col-d-2 item-wrap"
             :class="{'--centered': isMobile}">
          {{ status }}
          <span v-if="isMobile"
                class="status">
          </span>
        </div>

        <div v-if="!isMobile"
             class="cos-m-1 col-t-1 col-d-2 item-wrap">
          Игра: Online <span class="status"></span>

        </div>
        <div class="col-m-1 col-t-1 col-d-1 item-wrap --f-end">
          <div class="icon-wrapper">
            <svg width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5 14.3321V5.6718L10 1.34167L2.5 5.6718L2.5 14.3321L10 18.6622L17.5 14.3321ZM4.16667 6.63405L10 3.26618L15.8333 6.63405V13.3698L10 16.7377L4.16667 13.3698L4.16667 6.63405ZM10 14.1667C7.69881 14.1667 5.83333 12.3012 5.83333 10C5.83333 7.69882 7.69881 5.83334 10 5.83334C12.3012 5.83334 14.1667 7.69882 14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667ZM12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.50001 10 7.50001C11.3807 7.50001 12.5 8.61929 12.5 10Z"
                    fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {
  name = 'Марьяна (Мастер) Шадоуран'
  private status_: string = ''
  private isMobile_: boolean

  constructor() {
    super()
    this.isMobile_ = window.innerHeight < 667
  }

  set isMobile(bool: boolean) {
    this.isMobile_ = bool
  }

  get isMobile() {
    return this.isMobile_
  }

  set status(str: string) {
    this.status_ = str
  }

  get status() {
    return this.status_
  }

  cycle = {
    p: 2,
    c: 10
  }

  created() {
    window.addEventListener('resize', this.resizeEventHandler.bind(this))
    this.resized()
  }

  destroyed() {
    window.removeEventListener('resize', this.resizeEventHandler.bind(this))
  }

  private resizeEventHandler = () => {
    this.resized()
  }

  resized() {
    this.isMobile = window.innerWidth < 667
    this.status = this.isMobile
        ? `П: ${ this.cycle.p } Ц: ${ this.cycle.c }`
        : `Период: ${ this.cycle.p } Цикл ${ this.cycle.c }`
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
  #status-bar, .row {
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
