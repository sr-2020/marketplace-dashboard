<template>
  <div class="list__item">
    <div>{{ item.name }}</div>
    <div v-if="item.owner">Владелец: {{ getOwner(item.owner)?.name }}</div>
  </div>
</template>

<script lang="ts">
import { Corporation } from '@/store/organisations/types'
import ListItem from '@/components/common/list/ListItem.vue'
import { Options } from 'vue-class-component'
import { User } from "@/store/user/types";

@Options({})
export default class CorporationListItem extends ListItem<Corporation> {

  getOwner(id: number): User {
    return this.$store.state.users.find((user: User) => user.id === id)
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/components/list-item';

.list__item {
  .list-item();
}
</style>
