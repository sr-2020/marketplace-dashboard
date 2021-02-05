<template>
  <div id="app"
       ref="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/mixins";

#app {
  .colorScheme();
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  @Prop() theme: 'dark' | 'light' | undefined

  mounted() {
    App._setUpColorTheme()
  }

  private static _setUpColorTheme() {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
    }
    localStorage.getItem('theme')
  }
}

</script>
