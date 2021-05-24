<template>
  <div class="edit-window" v-if="dto">
    <h2 v-if="!item">Добавление номенклатуры</h2>

    <div class="form-field" v-if="dto.id !== 0">
      <label>ID: {{ dto.id }}</label>
    </div>

    <div class="form-field">
      <label>Название: </label>
      <input v-model="dto._name" />
    </div>

    <delete-warn
      v-if="delInit"
      :dto="dto"
      entity-name="sku"
      @accept="deleteEntity"
      @decline="delInit = false"
    />
    <div class="actions">
      <button v-if="item && !delInit" @click="delInit = true">
        Удалить
      </button>
      <button @click="item ? edit() : add()" :disabled="processing">
        {{ item ? 'Изменить' : 'Добавить' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import HttpAdapter, { ResponseModel } from '@/utils/httpAdapter'
import { Options } from 'vue-class-component'
import DeleteWarn from '@/components/shared/DeleteWarn.vue'
import SrAutocomplete from '@/components/shared/Autocomplete.vue'
import { AlertController } from '@/utils/alertService'
import { Nomenklatura, ProductType } from '@/store/products/types'
import { NomenklaturaDTO } from '@/views/Nomenklaturas/Methods/NomenklaturaDTO'

@Options({
  components: { DeleteWarn, SrAutocomplete }
})
export default class NomenklaturaEdit extends Vue {
  @Prop() item!: ResponseModel<Nomenklatura>
  @Prop() isAdd!: boolean
  delInit = false
  dto: null | NomenklaturaDTO = null
  processing = false

  mounted() {
    this.dto = new NomenklaturaDTO(this?.item)
  }

  get productTypes(): ProductType[] {
    return this.$store.state.producttypes
  }

  add() {
    this.processing = true
    HttpAdapter.post(['a-add-nomenklatura'], this.dto?.getAddDto()).subscribe(
      () => this.onActionSuccess('Номенклатура добавлена'),
      this.errorHandler
    )
  }

  edit() {
    this.processing = true
    HttpAdapter.patch(
      ['a-edit-nomenklatura'],
      this.dto?.getChangeDto()
    ).subscribe(
      () => this.onActionSuccess('Номенклатура изменена'),
      this.errorHandler
    )
  }

  deleteEntity() {
    if (this.dto) {
      HttpAdapter.delete(['a-del-nomenklatura'], {
        specialisationid: this.dto.id
      }).subscribe(
        () =>
          this.onActionSuccess(`Номенклатура с ID: ${this.dto?.id} удалена`),
        this.errorHandler
      )
    }
  }

  private onActionSuccess(msg: string) {
    AlertController.addAlert('Успешно', msg, 'success')
    this.delInit = this.processing = false
    this.$router.push(`/specs`)
  }

  errorHandler(err: ResponseModel<any>) {
    AlertController.addAlert('Ошибка', err.message as string, 'error')
    this.processing = false
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/components/edit-styles';

.edit-window {
  .edit-style();
}
</style>
