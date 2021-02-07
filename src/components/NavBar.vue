<template>
  <div class="container">
    <div class="row">
      <nav class="navbar col-m-3">
        <span class="selected-link"
              @click="hideNavbar">
          {{ currentLinkName }}
        </span>
        <span class="link-list"
              :class="{ hidden }"
              @click="hideNavbar">
         <router-link v-for="l in links"
                      :to="l.link"
                      :key="l.name"
                      >
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

@Component
export default class NavBar extends Vue {
  private selectedLink__: string = ''

  get currentLinkName() {
    return this.selectedLink__
  }

  links = [
    { name: 'Действия', link: '/' },
    { name: 'Магазины', link: '/shops' },
    { name: 'Корпорации', link: '/corps' },
    { name: 'Товары', link: '/goods' },
    { name: 'Специализации', link: '/specs' },
    { name: 'Всякое', link: '/others' }
  ]

  private navBarHidden__ = true

  get hidden() {
    return this.navBarHidden__
  }

  set hidden(state) {
    this.navBarHidden__ = state
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouterChange(newVal: Route) {
    this.selectedLink__ = newVal.name ?? ''
  }

  hideNavbar() {
    this.hidden = !this.hidden
  }

  mounted() {
    this.selectedLink__ = this.$route.name ?? ''
  }

}
</script>

<style scoped
       lang="less">
.navbar {
  padding-top: 0.5em;
  font-size: 12px;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  color: var(--font-prim);
  white-space: nowrap;

  .link-list {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    transition: width .3s ease-in-out;

    &.hidden {
      width: 0;

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
