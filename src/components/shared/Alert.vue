<template>
  <div class="alert-wrapper">
    <div class="alert">
      <div class="title">Some title</div>
      <div class="description"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Alert extends Vue {}
</script>

<style lang="less" scoped>
.alert {
  display: flex;
  flex-direction: column;
  min-height: 80px;
  height: 80px;
  cursor: pointer;
  overflow: hidden;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  color: var(--font-prim);
  background-color: var(--alert-warn);
  opacity: 0.5;

  &.error {
    background-color: var(--alert-error);
  }

  &.success {
    background-color: var(--alert-success);
  }

  &:hover {
    height: auto;
    opacity: 1;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    z-index: 10;
    top: 20px;
    right: 20px;
    height: 100vh;
    width: 300px;
    position: fixed;
  }
}
</style>
