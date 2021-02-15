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

#app {
  overflow-x: hidden;
}

.content-wrapper {
  padding-top: 8px;
  transition: filter .3s ease-in-out;
  pointer-events: none;

  &.blur {
    filter: blur(6px);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StatusBar from '@/components/StatusBar.vue'
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
}

</script>
