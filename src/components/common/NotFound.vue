<template>
  <div class="container wrapper">
    <h1>404</h1>
    <h2>Something go wrong</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NotFound extends Vue {}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 100px;
  }
}
</style>
