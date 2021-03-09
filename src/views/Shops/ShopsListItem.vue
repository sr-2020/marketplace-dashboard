<template>
  <div class="list__item">
    <div>Название: {{ item.name }}</div>
    <div>Баланс: {{ item.balance }}</div>
    <div v-if="item.owner">Владелец: {{ item.owner.name }}</div>
  </div>
</template>

<script lang="ts">
import { Shop } from "@/store/organisations/types";
import ListItem from "@/components/common/list/ListItem.vue";
import { Options } from "vue-class-component";

@Options({})
export default class ShopsListItem extends ListItem<Shop> {}
</script>

<style lang="less">
@import "~@/assets/components/list-item";

.list__item {
  .list-item();
}
</style>
