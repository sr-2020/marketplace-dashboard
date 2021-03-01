<template>
  <div class="container">
    <div class="row">
      <button @click="selectAlert">Test alert</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AlertController } from "@/utils/alertService";

@Component({})
export default class Home extends Vue {
  selectAlert() {
    AlertController.addAlert(
      Math.random().toString(),
      Math.random().toString(),
      "error"
    );
  }
}
</script>
