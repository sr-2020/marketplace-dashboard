<template>
  <div class="container">
    <div class="row">
      <nav class="navbar col-m-3">
        <span class="selected-link"
              :class="{ 'rotated-icon': hidden }"
              @click="hideNavbar">
          {{ selectedLink }}

          <svg width="20"
               height="20"
               viewBox="0 0 18 11"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               :class="{ hidden }">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.293 0.292908L17.7072 1.70712L9.00008 10.4142L0.292969 1.70712L1.70718 0.292908L9.00008 7.5858L16.293 0.292908Z"
                  fill="white"/>
          </svg>

        </span>
        <span class="link-list"
              :class="{ hidden }"
              @click="hideNavbar">
         <router-link v-for="l in links"
                      :to="l.link"
                      :key="l.name">
           {{ l.name }}
         </router-link>
        </span>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { RootMutations } from '@/store/mutations'

@Component
export default class NavBar extends Vue {
  private SELECTED_LINK: string = ''

  set selectedLink(name: string) {
    this.SELECTED_LINK = name
  }

  get selectedLink() {
    return this.SELECTED_LINK
  }

  links = [
    { name: 'Действия', link: '/' },
    { name: 'Магазины', link: '/shops' },
    { name: 'Корпорации', link: '/corps' },
    { name: 'Товары', link: '/goods' },
    { name: 'Специализации', link: '/specs' },
    { name: 'Всякое', link: '/others' }
  ]

  get hidden(): boolean {
    return this.$store.state.navbarState
  }

  set hidden(state: boolean) {
    this.$store.commit(RootMutations.NAVBAR_TOGGLE, state)
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouterChange(newVal: Route) {
    this.selectedLink = newVal.name ?? ''
  }

  hideNavbar() {
    this.hidden = !this.hidden
  }

  mounted() {
    this.selectedLink = this.$route.name ?? ''
  }

}
</script>

<style scoped
       lang="less">
.navbar {
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  font-size: 12px;
  position: relative;
  white-space: nowrap;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .link-list {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    transition-property: width, height;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;

    @media screen and (max-width: 500px) {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 40px;
      height: 50vh;
      a {
        margin: 12px 0;
      }

      &.hidden {
        height: 0 !important;
        width: 100% !important;
      }
    }

    &.hidden {
      width: 0;
      height: 100%;
    }
  }

  .selected-link {
    cursor: pointer;
    margin-right: 0.3em;

    svg {
      transition: transform .3s ease-in-out;
      transform: rotate(90deg);
      @media screen and (max-width: 1024px) {
        width: 12px;
      }
      @media screen and (max-width: 500px) {
        transform: rotate(180deg)
      }

      path {
        fill: var(--font-prim);
      }
    }

    &.rotated-icon svg {
      transform: rotate(-90deg);
      @media screen and (max-width: 500px) {
        transform: rotate(0deg)
      }
    }
  }

  a {
    color: var(--font-prim);
    text-decoration: unset;
    transition-property: color, font-size;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    margin-right: 0.3em;

    &.router-link-exact-active {
      display: none;
    }

    &:visited {
      color: unset;
    }

    &:hover {
      color: var(--accent)
    }
  }

  .selected-link, a:hover {
    font-size: 2em;
  }
}
</style>
