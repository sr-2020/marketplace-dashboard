<template>
  <div class="container">
    <div class="row">
      <nav class="navbar col-m-3">
        <span class="selected-link"
              @click="hideNavbar">
          {{ selectedLink }}
        </span>
        <span class="link-list"
              :class="{ hidden }"
              @click="hideNavbar">
         <router-link v-for="l in links"
                      :to="l.link"
                      :key="l.name" >
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
  padding-top: 0.5em;
  font-size: 12px;
  position: relative;


  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  color: var(--font-prim);
  white-space: nowrap;

  .link-list {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    transition-property: width, height;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;


    @media screen and (max-width: 414px) {
      position: absolute;
      display: flex;
      flex-direction: column;
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
  }

  a {
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
