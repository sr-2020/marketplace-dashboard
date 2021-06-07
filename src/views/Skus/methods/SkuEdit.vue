<template>
  <div class="edit-window" v-if="dto">
    <h2 v-if="!item">Добавление товара</h2>

    <div class="form-field" v-if="dto.id !== 0">
      <label>ID: {{ dto.id }}</label>
    </div>

    <div class="form-field">
      <label>Название: </label>
      <input v-model="dto._name" />
    </div>

    <div class="form-field">
      <label>Количество: </label>
      <input v-model="dto._count" />
    </div>

    <div class="form-field">
      <label>Базовое количество: </label>
      <input v-model.number="dto._skuBaseCount" />
    </div>

      <div class="form-field">
      <label>Базовая цена: </label>
      <input v-model.number="dto._skuBasePrice" />
    </div>

    <div class="form-field">
      <label>Номенклатура: </label>
      <sr-autocomplete
        :single="true"
        :options="nomenklaturas"
        :value="dto._nomenklaturaId"
        id-key="id"
        @change="dto._nomenklaturaId = $event"
      />
    </div>

    <div class="form-field">
      <label>Корпорация: </label>
      <sr-autocomplete
        :single="true"
        :options="corporations"
        :value="dto._corporationId"
        id-key="id"
        @change="dto._corporationId = $event"
      />
    </div>

    <div class="form-field">
      <label> Активна: <input v-model="dto._enabled" type="checkbox"/></label>
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
import { SkuDTO } from '@/views/Skus/methods/SkuDTO'
import { Nomenklatura, Sku } from '@/store/products/types'
import { Corporation } from '@/store/organisations/types'
import { updateEntity } from '@/utils/dictionaryService'

@Options({
  components: { DeleteWarn, SrAutocomplete }
})
export default class SkuEdit extends Vue {
  @Prop() item!: ResponseModel<Sku>
  @Prop() isAdd!: boolean
  delInit = false
  dto: null | SkuDTO = null
  processing = false

  mounted() {
    this.dto = new SkuDTO(this?.item)
  }

  get nomenklaturas(): Nomenklatura[] {
    return this.$store.state.nomenklaturas
  }

  get corporations(): Corporation[] {
    return this.$store.state.corporations
  }

  add() {
    this.processing = true
    HttpAdapter.post(['a-add-sku'], this.dto?.getAddDto()).subscribe(
      () => this.onActionSuccess('Товар добавлен'),
      this.errorHandler
    )
  }

  edit() {
    this.processing = true
    HttpAdapter.patch(['a-edit-sku'], this.dto?.getChangeDto()).subscribe(
      () => this.onActionSuccess('Товар изменен'),
      this.errorHandler
    )
  }

  deleteEntity() {
    if (this.dto) {
      HttpAdapter.delete(['a-del-sku'], {
        skuid: this.dto.id
      }).subscribe(
        () => this.onActionSuccess(`Товар с ID: ${this.dto?.id} удален`),
        this.errorHandler
      )
    }
  }

  private onActionSuccess(msg: string) {
    AlertController.addAlert('Успешно', msg, 'success')
    updateEntity<Sku>('skus', { store: this.$store, force: true })
    this.delInit = this.processing = false
    this.$router.push(`/skus`)
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
