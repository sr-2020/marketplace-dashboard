<template>
  <div class="container">
    <logs-list />
  </div>
</template>

<script lang="ts">
import LogsList from "@/views/Logs/LogsList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { LogsList }
})
export default class Logs extends Vue {}
</script>
