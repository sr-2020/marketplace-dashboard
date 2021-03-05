<template>
  <div class="container">
    <div class="row">
      <button @click="addError">Test error</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AlertController } from "@/utils/alertService";

@Component({})
export default class Actions extends Vue {
  addError() {
    AlertController.addAlert(
      Math.random().toString(),
      Math.random().toString(),
      "error"
    );
  }
}
</script>
