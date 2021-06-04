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
      <div class="title">Количество:</div>
      <div class="value">{{ dto.count }}</div>
    </div>

    <div class="field-row">
      <div class="title">Базовое количество:</div>
      <div class="value">{{ dto.skuBaseCount }}</div>
    </div>
    
    <div class="field-row">
      <div class="title">Базовая цена:</div>
      <div class="value">{{ dto.skuBasePrice }}</div>
    </div>

    <div class="field-row">
      <div class="title">Корпорация:</div>
      <div class="value">{{ getCorporation(dto.corporationId)?.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Номенклатура:</div>
      <div class="value">{{ getNomenklatura(dto.nomenklaturaId)?.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Статус:</div>
      <div class="value">{{ dto.enabled ? 'Активен' : 'Неактивен' }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { Nomenklatura, Sku } from "@/store/products/types";
import { SkuDTO } from './SkuDTO'
import { Corporation } from "@/store/organisations/types";

export default class SkuView extends Vue {
  @Prop() item!: ResponseModel<Sku>
  dto = {}

  mounted() {
    this.dto = new SkuDTO(this.item)
  }

  getNomenklatura(id: number): Nomenklatura {
    return this.$store.state.nomenklaturas.find((nk: Nomenklatura) => nk.id == id)
  }

  getCorporation(id: number): Corporation{
    return this.$store.state.corporations.find((cp: Corporation) => cp.id == id)
  }
}
</script>

<style scoped
       lang="less">
@import '~@/assets/components/view-styles';

.field-row {
  .view-styles();
}
</style>
