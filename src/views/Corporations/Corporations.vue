<template>
  <div class="container">
    <corporation-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItem from "@/components/common/list/ListItem.vue";
import CorporationList from "./CorporationList.vue";

@Component({
  components: { CorporationList, ListItem }
})
export default class Corporations extends Vue {}
</script>
