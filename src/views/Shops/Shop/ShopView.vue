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
      <div class="title">Лайфстайл:</div>
      <div class="value">{{ dto.lifestyle }}</div>
    </div>

    <div class="field-row">
      <div class="title">Владелец:</div>
      <div class="value">{{ getOwner(dto.owner) }}</div>
    </div>

    <div class="field-row"
         v-if="dto.specialisations">
      <div class="title">Специализации:</div>
      <div class="value">
        <div v-for="(id, idx) of dto.specialisations"
             :key="idx">
          {{ getSpec(id) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ShopDTO } from '@/views/Shops/Shop/ShopDTO'
import HttpAdapter, { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { Specialisation } from '@/store/products/types'
import { UserState } from "@/store/user/types";

export default class ShopView extends Vue {
  @Prop() item!: ResponseModel<Shop>
  dto = {}
  specialisations: Specialisation[] = []

  mounted() {
    this.dto = new ShopDTO(this.item)
    HttpAdapter.get<Specialisation[]>(['a-specialisations']).subscribe(
      ({ data }) => {
        this.specialisations = data
      }
    )
  }

  getSpec(id: number) {
    const spec = this.specialisations.find(el => el.specialisationId === id)
    return spec ? spec.name : ''
  }

  getOwner(owner: UserState) {
    return owner ? owner.name : ''
  }
}
</script>

<style scoped
       lang="less">

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
