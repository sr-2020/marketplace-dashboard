<template>
  <ul v-if="list.length">
    <li v-for="l in list" :key="l.id">{{ l }}</li>
  </ul>
  <loader v-else></loader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loader from "@/components/shared/Loader.vue";

@Component({
  components: { Loader }
})
export default class List<T> extends Vue {
  list: T[] = [];
}
</script>

<style scoped></style>
