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
      <div class="title">Владелец:</div>
      <div class="value">
        <sr-entity-link type="user" :to="dto.ownerId"></sr-entity-link>
        {{ getOwner(dto.ownerId)?.name }}
      </div>
    </div>

    <div class="field-row">
      <div class="title">Current TO:</div>
      <div class="value">{{ dto.currentKPI }}</div>
    </div>

    <div class="field-row">
      <div class="title">Last TO:</div>
      <div class="value">{{ dto.lastKPI }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { CorporationDTO } from './CorporationDTO'
import { Corporation } from '@/store/organisations/types'
import { User } from '@/store/user/types'
import { Options } from 'vue-class-component'
import SrEntityLink from '@/components/shared/Link.vue'

@Options({ components: { SrEntityLink } })
export default class CorporationView extends Vue {
  @Prop() item!: ResponseModel<Corporation>
  dto = {}

  mounted() {
    this.dto = new CorporationDTO(this.item)
  }

  getOwner(id: number): User {
    return this.$store.state.users.find((user: User) => user.id === id)
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/components/view-styles';

.field-row {
  .view-styles();
}
</style>
