<template>
  <div v-if="dto">
    <div class="field-row">
      <div class="title">Id:</div>
      <div class="value">{{ dto.modelId }}</div>
    </div>

    <div class="field-row">
      <div class="title">Имя:</div>
      <div class="value">{{ dto.personName }}</div>
    </div>
    <div class="field-row">
      <div class="title">Баланс:</div>
      <div class="value">{{ dto.currentBalance }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { User } from '@/store/user/types'
import { UserDTO } from './UserDTO'


export default class UserView extends Vue {
  @Prop() item!: ResponseModel<User>
  dto = {}

  mounted() {
    this.dto = new UserDTO(this.item)
  }
}

</script>

<style scoped lang="less">
@import '~@/assets/components/view-styles';
.field-row {
  .view-styles();
}
</style>

