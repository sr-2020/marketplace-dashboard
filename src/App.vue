<template>
  <div id="app" ref="rootOfApp">
    <status-bar></status-bar>
    <nav-bar></nav-bar>
    <div @click="onClick">File button</div>
    <div class="content-wrapper" :class="{ blur: !navBarHidden }">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
@import "assets/grid";

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
import { Component, Vue } from "vue-property-decorator";
import StatusBar from "@/components/StatusBar.vue";
import NavBar from "@/components/NavBar.vue";
import CsvParser from "@/utils/csvParser";

@Component({
  components: {
    NavBar,
    StatusBar
  }
})
export default class App extends Vue {
  get navBarHidden() {
    return this.$store.state.navbarState;
  }

  onClick() {
    const test = new CsvParser([{ name: "name", type: "string" }]);
    test.selectFile();

    test.onError = err => {
      console.log(err);
    };
  }
}
</script>
