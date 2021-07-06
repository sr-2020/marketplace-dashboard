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

      <div class="field-row">
      <div class="title">SIN:</div>
      <div class="value">{{ dto.sin }}</div>
    </div>

      <div class="field-row">
      <div class="title">Scoring:</div>
      <div class="value">{{ dto.currentScoring }}</div>
    </div>

      <div class="field-row">
      <div class="title">LifeStyle:</div>
      <div class="value">{{ dto.lifeStyle }}</div>
    </div>

      <div class="field-row">
      <div class="title">ForecastLifeStyle:</div>
      <div class="value">{{ dto.forecastLifeStyle }}</div>
    </div>

      <div class="field-row">
      <div class="title">Metatype:</div>
      <div class="value">{{ dto.metatype }}</div>
    </div>

      <div class="field-row">
      <div class="title">Гражданство:</div>
      <div class="value">{{ dto.citizenship }}</div>
    </div>

      <div class="field-row">
      <div class="title">Виза:</div>
      <div class="value">{{ dto.viza }}</div>
    </div>

      <div class="field-row">
      <div class="title">Залогодержатель:</div>
      <div class="value">{{ dto.pledgee }}</div>
    </div>

      <div class="field-row">
      <div class="title">Страховка:</div>
      <div class="value">{{ dto.insurance }}</div>
    </div>

      <div class="field-row">
      <div class="title">Лицензии:</div>
      <div class="value">{{ dto.licenses }}</div>
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

