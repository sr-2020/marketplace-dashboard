<template>
  <div id="app" ref="rootOfApp">
    <status-bar></status-bar>
    <nav-bar></nav-bar>
    <alert></alert>
    <div class="content-wrapper" :class="{ blur: !navBarHidden }">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
@import 'assets/grid';

#app {
  min-height: 100vh;
  overflow-x: hidden;
}

.content-wrapper {
  padding-top: 8px;
  transition: filter 0.3s ease-in-out;

  &.blur {
    min-height: 100%;
    filter: blur(6px);
    pointer-events: none;
  }
}
</style>

<script lang="ts">
import StatusBar from '@/components/common/StatusBar.vue'
import NavBar from '@/components/common/NavBar.vue'
import Alert from '@/components/shared/Alert.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    Alert,
    NavBar,
    StatusBar,
  },
})
export default class App extends Vue {
  get navBarHidden() {
    return this.$store.state.navbarState
  }
}
</script>
