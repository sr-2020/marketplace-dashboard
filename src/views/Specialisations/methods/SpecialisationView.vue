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
import { Specialisation } from '@/store/products/types'
import { User } from '@/store/user/types'
import { LifeStyle } from "@/store/types";
import { SpecialisationDTO } from "@/views/Specialisations/methods/SpecialisationDTO";

export default class SpecialisationView extends Vue {
  @Prop() item!: ResponseModel<Specialisation>
  dto = {}

  mounted() {
    this.dto = new SpecialisationDTO(this.item)
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
