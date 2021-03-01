<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Loader extends Vue {
  @Prop({ default: "Loading" }) text!: string;
}
</script>

<style scoped lang="less">
.loader-wrapper {
  width: 100%;
  text-align: center;
}

.loader {
  width: 10vh;
  min-width: 10vh;
  height: 10vh;
  min-height: 10vh;
  margin: auto;
  border: 4px solid var(--accent);
  border-bottom: transparent;
  border-left: transparent;
  border-radius: 50%;
  animation: a-loader-spin infinite ease-in 0.8s;
}

.text {
  margin-top: 8px;
  font-size: 20px;
}

@keyframes a-loader-spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
