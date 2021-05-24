<template>
  <div v-if="dto">
    <div class="field-row">
      <div class="title">Id:</div>
      <div class="value">{{ dto.id }}</div>
    </div>

    <div class="field-row">
      <div class="title">Изображение:</div>
      <img :src="dto.pictureUrl" />
    </div>

    <div class="field-row">
      <div class="title">Название:</div>
      <div class="value">{{ dto.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Код:</div>
      <div class="value">{{ dto.code }}</div>
    </div>

    <div class="field-row">
      <div class="title">Специализация:</div>
      <div class="value">
        {{ getSpecialisation(dto.specialisationId)?.name }}
      </div>
    </div>

    <div class="field-row">
      <div class="title">Lifestyle:</div>
      <div class="value">{{ getLifestyle(dto.lifestyleId)?.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Базовая цена:</div>
      <div class="value">{{ dto.basePrice }}</div>
    </div>

    <div class="field-row">
      <div class="title">Базовое количество:</div>
      <div class="value">{{ dto.baseCount }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { Nomenklatura, Specialisation } from '@/store/products/types'
import { NomenklaturaDTO } from './NomenklaturaDTO'
import { LifeStyle } from '@/store/types'

export default class NomenklaturaView extends Vue {
  @Prop() item!: ResponseModel<Nomenklatura>
  dto = {}

  mounted() {
    this.dto = new NomenklaturaDTO(this.item)
  }

  getSpecialisation(id: number): Specialisation {
    return this.$store.state.specialisations.find(
      (spec: Specialisation) => spec.id === id
    )
  }

  getLifestyle(lifestyleId: number): LifeStyle {
    return this.$store.state.lifestyles.find((ls: LifeStyle) => ls.id ===  lifestyleId)
  }

}
</script>

<style scoped lang="less">
@import '~@/assets/components/view-styles';
.field-row {
  .view-styles()
}
</style>
