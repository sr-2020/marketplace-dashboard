<template>
  <div class="container">
    <specialisations-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItem from "@/components/common/list/ListItem.vue";
import SpecialisationsList from "./SpecialisationsList.vue";

@Component({
  components: { SpecialisationsList, ListItem }
})
export default class Specialisations extends Vue {}
</script>
