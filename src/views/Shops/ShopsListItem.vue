<template>
  <div class="list__item">
    <div>Локация: {{item.location ? item.location : 'Отсутствует'}}</div>
    <div>Название: {{ item.name }}</div>
    <div>Баланс: {{ item.balance }}</div>
    <div v-if="item.owner">Владелец: {{ getOwner(item.owner)?.name }}</div>
  </div>
</template>

<script lang="ts">
import { Shop } from '@/store/organisations/types'
import ListItem from '@/components/common/list/ListItem.vue'
import { Options } from 'vue-class-component'
import { User } from "@/store/user/types";

@Options({})
export default class ShopsListItem extends ListItem<Shop> {
  getOwner(ownerId: number) {
    return this.$store.state.users.find((user: User) => user.modelId == ownerId)
  }
}
</script>

<style lang="less">
@import '~@/assets/components/list-item';

.list__item {
  .list-item();
}
</style>
