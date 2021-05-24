<template>
  <div v-if="dto">
    <div class="field-row">
      <div class="title">Id:</div>
      <div class="value">{{ dto.id }}</div>
    </div>

    <div class="field-row">
      <div class="title">Локация:</div>
      <div class="value">{{ dto.location ? dto.location : 'Локация отсутствует' }}</div>
    </div>

    <div class="field-row">
      <div class="title">Название:</div>
      <div class="value">{{ dto.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Лайфстайл:</div>
      <div class="value">{{ getLifestyle(dto.lifestyle)?.name }}</div>
    </div>

    <div class="field-row">
      <div class="title">Владелец:</div>
      <div class="value">{{ getOwner(dto.owner)?.name }}</div>
    </div>

    <div class="field-row" v-if="dto.specialisations">
      <div class="title">Специализации:</div>
      <div class="value">
        <div v-for="(id, idx) of dto.specialisations" :key="idx">
          {{ getSpec(id) }}
        </div>
      </div>
    </div>

    <div class="field-row">
      <div class="title">Комментарий:</div>
      <div class="value">{{ dto.comment }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ShopDTO } from '@/views/Shops/methods/ShopDTO'
import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { User } from '@/store/user/types'
import { LifeStyle } from "@/store/types";
import { Specialisation } from "@/store/products/types";

export default class ShopView extends Vue {
  @Prop() item!: ResponseModel<Shop>
  dto = {}

  mounted() {
    this.dto = new ShopDTO(this.item)
  }

  getSpec(id: number) {
    const spec = this.$store.state.specialisations.find((el: Specialisation) => el.specialisationId === id)
    return spec ? spec.name : ''
  }

  getOwner(ownerId: number): User {
    return this.$store.state.users.find((user: User) => user.id === ownerId)
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

