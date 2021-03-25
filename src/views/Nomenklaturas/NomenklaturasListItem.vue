<template>
  <div class="list__item">
    <div>Название: {{ item.nomenklaturaName }}</div>
    <div>Количество: {{ item.baseCount }}</div>
    <div>Цена: {{ item.basePrice }}</div>
    <div>Описание: {{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import { Nomenklatura } from '@/store/products/types'
import ListItem from '@/components/common/list/ListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class NomenklaturasListItem extends ListItem<Nomenklatura> {}
</script>

<style lang="less">
@import '~@/assets/components/list-item';

.list__item {
  .list-item();
}
</style>
