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
    { name: 'Действия', link: '/' },
    { name: 'Магазины', link: '/shops' },
    { name: 'Корпорации', link: '/corps' },
    { name: 'Товары', link: '/skus' },
    { name: 'Специализации', link: '/specs' },
    { name: 'Номеклатура', link: '/nomenklaturas' }
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
  //TODO(dzu, arival): Возможно стоит схллопнуть классы .navbar и .link-list
  //Я убрал анимацию (она сложно поддерживается) так что враппер не так нужен
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
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 40px;
      height: 50vh;
      a {
        margin: 12px 0;
      }
    }
  }

  a {
    color: var(--font-prim);
    text-decoration: unset;
    transition-property: color, font-size;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    margin-right: 0.3em;

    &.router-link-exact-active {
      order: -1;
      font-size: 2em;
    }

    &:visited {
      color: unset;
    }

    &:hover {
      color: var(--accent);
    }
  }

  a:hover {
    font-size: 2em;
  }
}
</style>
