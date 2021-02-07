<template>
  <div id="app"
       ref="rootOfApp">
    <status-bar></status-bar>
    <nav-bar></nav-bar>
    <div class="content-wrapper"
         :class="{ blur: !navBarHidden }">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
@import "assets/grid";

.content-wrapper {
  padding-top: 8px;
  transition: filter .3s ease-in-out;
  pointer-events: none;

  &.blur {
    filter: blur(2px);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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

  get navBarHidden() {
    return this.$store.state.navbarState
  }

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
