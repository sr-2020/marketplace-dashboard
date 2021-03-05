<template>
  <div class="list__item">
    <div>{{ item.name }}</div>
    <div v-if="item.owner">Владелец: {{ item.owner.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { Corporation } from "@/store/organisations/types";
import ListItem from "@/components/common/list/ListItem.vue";

@Component({})
export default class CorporationListItem extends ListItem<Corporation> {}
</script>

<style scoped lang="less">
@import "~@/assets/components/list-item";

.list__item {
  .list-item();
}
</style>
