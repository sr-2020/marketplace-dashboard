<template>
  <div id="app" ref="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/mixins";
#app {
  .colorScheme();
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ColorTheme, THEME_DARK, THEME_LIGHT} from '@/assets/themes'

@Component
export default class App extends Vue {
  mounted() {
    console.log(this.$refs, 'mountedHook')
    this._setUpColorTheme()
  }

  private _setUpColorTheme() {
    if(!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
    }
    console.log(localStorage.getItem('theme'))
  }

}

</script>
