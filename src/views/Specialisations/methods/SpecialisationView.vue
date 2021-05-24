<template>
  <div v-if="dto">
    <div class="field-row">
      <div class="title">Id:</div>
      <div class="value">{{ dto.id }}</div>
    </div>

    <div class="field-row">
      <div class="title">Название:</div>
      <div class="value">{{ dto.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">ProductType:</div>
      <div class="value">{{ getProductType(dto.productTypeId)?.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Используется мгновенно:</div>
      <div class="value">{{ dto.instantConsume ? 'да' : 'нет' }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { ProductType, Specialisation } from '@/store/products/types'
import { LifeStyle } from '@/store/types'
import { SpecialisationDTO } from './SpecialisationDTO'

export default class SpecialisationView extends Vue {
  @Prop() item!: ResponseModel<Specialisation>
  dto = {}

  mounted() {
    this.dto = new SpecialisationDTO(this.item)
  }

  getProductType(productTypeId: number): ProductType {
    return this.$store.state.producttypes.find(
      (type: ProductType) => type.id === productTypeId
    )
  }

  getLifestyle(lifestyleId: number): LifeStyle {
    return this.$store.state.lifestyles.find(
      (ls: LifeStyle) => ls.id === lifestyleId
    )
  }
}
</script>

<style scoped lang="less">
.field-table {
  display: table-row;
}

.field-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  .title {
    width: 20%;
  }

  .value {
  }
}
</style>
