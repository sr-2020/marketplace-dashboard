<template>
  <div class="list__item">
    <div>Название: {{ item.name }}</div>
    <div>Описание: {{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import { Sku } from '@/store/products/types'
import ListItem from '@/components/common/list/ListItem.vue'

export default class SkusListItem extends ListItem<Sku> {}
</script>

<style lang="less">
@import '~@/assets/components/list-item';

.list__item {
  .list-item();
}
</style>
