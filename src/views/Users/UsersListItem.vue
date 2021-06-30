<template>
  <div class="list__item">
    <div>Имя: {{ item.name }}</div>
    <div>Баланс: {{ item.balance }}</div>
  </div>
</template>

<script lang="ts">
import { User } from '@/store/user/types'
import ListItem from '@/components/common/list/ListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class UsersListItem extends ListItem<User> {}
</script>

<style scoped lang="less">
@import '~@/assets/components/list-item';

.list__item {
  .list-item();
}
</style>
