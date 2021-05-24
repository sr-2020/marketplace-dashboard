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
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { Sku } from '@/store/products/types'
import { SkuDTO } from './SkuDTO'

export default class SkuView extends Vue {
  @Prop() item!: ResponseModel<Sku>
  dto = {}

  mounted() {
    this.dto = new SkuDTO(this.item)
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/components/view-styles';
.field-row {
  .view-styles()
}
</style>
