<template>
  <div class="container">
    <div class="row">
      <button @click="addError">Test error</button>
    </div>
  </div>
</template>

<script lang="ts">
import { AlertController } from "@/utils/alertService";
import { Options, Vue } from "vue-class-component/dist/vue-class-component";

@Options({})
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
