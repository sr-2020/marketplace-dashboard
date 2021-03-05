<template>
  <div class="list__item">
    <div>Тип скидки: {{ item.discountType }}</div>
    <div>Номер специализации: {{ item.specialisationId }}</div>
    <div>Название специализации: {{ item.specialisationName }}</div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { Specialisation } from "@/store/products/types";
import ListItem from "@/components/common/list/ListItem.vue";

@Component({})
export default class SpecialisationsListItem extends ListItem<Specialisation> {}
</script>

<style scoped lang="less">
@import "~@/assets/components/list-item";

.list__item {
  .list-item();
}
</style>
