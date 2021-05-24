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
import { Nomenklatura } from '@/store/products/types'
import { NomenklaturaDTO } from './NomenklaturaDTO'

export default class NomenklaturaView extends Vue {
  @Prop() item!: ResponseModel<Nomenklatura>
  dto = {}

  mounted() {
    this.dto = new NomenklaturaDTO(this.item)
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
