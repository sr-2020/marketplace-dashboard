<template>
  <div class="item-wrapper">
    <div class="item">
      <div>Тип скидки: {{ i.discountType }}</div>
      <div>Номер продукта: {{ i.productTypeId }}</div>
      <div>Название продукта: {{ i.productTypeName }}</div>
      <div>Номер специализации: {{ i.specialisationId }}</div>
      <div>Название специализации: {{ i.specialisationName }}</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Specialisation } from '@/store/products/types'


@Component({})
export default class SpecialisationListItem extends Vue {
  @Prop() i!: Specialisation

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
