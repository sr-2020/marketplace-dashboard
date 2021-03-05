<template>
  <LogsList></LogsList>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogsList from "@/views/Logs/LogsList.vue";

@Component({
  components: { LogsList }
})
export default class Logs extends Vue {}
</script>
