<template>
  <div class="container">
    <shops-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItem from "@/components/common/list/ListItem.vue";
import ShopsList from "./ShopsList.vue";

@Component({
  components: { ShopsList, ListItem }
})
export default class Shops extends Vue {}
</script>
