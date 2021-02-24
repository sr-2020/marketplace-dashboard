<template>
  <div class="item-wrapper">
    <div class="item">
      <div>Название: {{ i.name }}</div>
      <div>Баланс: {{ i.balance }}</div>
      <div v-if="i.owner">
        Владелец: {{ i.owner.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Shop } from '@/store/organisations/types'


@Component({})
export default class ShopListItem extends Vue {
  @Prop() i!: Shop

}

</script>

<style scoped
       lang="less">
.item {
  padding: 12px 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
</style>
