<template>
  <div id="app"
       ref="rootOfApp">
    <status-bar></status-bar>
    <nav-bar></nav-bar>
    <div class="container">

    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/grid";

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: normal;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StatusBar from '@/components/StatusBar.vue'
import { THEME_DARK, THEME_LIGHT } from '@/assets/themes'
import NavBar from '@/components/NavBar.vue'

@Component({
  components: {
    NavBar,
    StatusBar
  }
})
export default class App extends Vue {
  @Prop() theme: 'dark' | 'light' | undefined

  mounted() {
    this._setUpColorTheme()
  }

  private _setUpColorTheme() {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
    }
    const currentTheme = localStorage.getItem('theme')
    const selectedTheme = currentTheme === 'lightt' ? THEME_LIGHT : THEME_DARK
    const appRef = document.body

    Object.keys(selectedTheme).forEach(key => {
      appRef.style.setProperty(key, selectedTheme[key])
    })
  }
}

</script>
