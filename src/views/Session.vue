<template>
  <div class="container">
    <div class="row">
      <div class="col-m-3">
        <h2>Основная информация</h2>
        {{ session }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Session } from "@/store/types";
import { Vue } from "vue-property-decorator";

export default class SrSession extends Vue {
  get session(): Session | null {
    return this.$store.state.session
  }
}
</script>

<style scoped lang="less">

</style>
