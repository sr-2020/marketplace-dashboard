<template>
  <div class="container">
    <div class="row">
      <nav class="navbar col-m-3">
        <span class="link-list">
          <router-link v-for="l in links" :to="l.link" :key="l.name">
           {{ l.name }}
          </router-link>
        </span>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class NavBar extends Vue {
  private p_links = [
    // { name: 'Действия', link: '/' },
    { name: 'Информация', link: '/'},
    { name: 'Магазины', link: '/shops' },
    { name: 'Корпорации', link: '/corporations' },
    { name: 'Товары', link: '/skus' },
    { name: 'Специализации', link: '/specialisations' },
    { name: 'Номеклатура', link: '/nomenklaturas' },
    { name: 'Пользователи', link: '/users'},
  ]

  get links() {
    if (this.$store.state.logs.alerts.length > 0) {
      return [...this.p_links, { name: 'Logs', link: '/logs' }]
    }
    return this.p_links
  }
}
</script>

<style scoped lang="less">
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
    display: inline-flex;
    align-items: baseline;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    transition-property: width, height;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    @media screen and (max-width: 500px) {
      display: flex;
      top: 40px;
      height: fit-content;
      a {
        margin: 0 12px;
      }
    }
  }

  a {
    color: var(--font-prim);
    text-decoration: unset;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    margin-right: 0.3em;

    &.router-link-exact-active {
      display: none;
      font-size: 2em;
    }

    &:visited {
      color: unset;
    }

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
