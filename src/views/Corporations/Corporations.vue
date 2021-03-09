<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from "@/components/common/list/ListItem.vue";
import CorporationList from "./CorporationList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { CorporationList, ListItem }
})
export default class Corporations extends Vue {}
</script>
