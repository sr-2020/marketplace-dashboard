<template>
  <div class="edit-window"
       v-if="dto">
    <h2 v-if="!item">Добавление специализации</h2>

    <div class="form-field"
         v-if="dto.id !== 0">
      <label>ID: {{ dto.id }}</label>
    </div>

    <div class="form-field">
      <label>Название: </label>
      <el-input v-model="dto._name" />
    </div>

    <div class="form-field">
      <label>Тип продукта: </label>
      <el-select v-model="dto._productTypeId"
                 placeholder="Тип продукта">
        <el-option
          v-for="p of productTypes"
          :key="p.id"
          :value="p.id"
          :label="p.name"
        />
      </el-select>
    </div>

    <delete-warn
      v-if="delInit"
      :dto="dto"
      entity-name="специализацию"
      @accept="deleteEntity"
      @decline="delInit = false"
    />
    <div class="actions">
      <v-btn size="small"
             v-if="item && !delInit"
             @click="delInit = true">
        Удалить
      </v-btn>
      <v-btn size="small"
             @click="item ? edit() : add()"
             :disabled="processing">
        {{ item ? 'Изменить' : 'Добавить' }}
      </v-btn>
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
import { SpecialisationDTO } from '@/views/Specialisations/methods/SpecialisationDTO'
import { ProductType, Specialisation } from '@/store/products/types'
import { updateEntity } from '@/utils/dictionaryService'
import { ElInput, ElOption, ElSelect } from 'element-plus'

@Options({
  components: { DeleteWarn, SrAutocomplete, ElInput, ElOption, ElSelect }
})
export default class SpecialisationEdit extends Vue {
  @Prop() item!: ResponseModel<Specialisation>
  @Prop() isAdd!: boolean
  delInit = false
  dto: null | SpecialisationDTO = null
  processing = false

  mounted() {
    this.dto = new SpecialisationDTO(this?.item)
  }

  get productTypes(): ProductType[] {
    return this.$store.state.producttypes
  }

  add() {
    this.processing = true
    HttpAdapter.post(['a-add-specialisation'], this.dto?.getAddDto()).subscribe(
      () => this.onActionSuccess('Специализация добавлена'),
      this.errorHandler
    )
  }

  edit() {
    this.processing = true
    HttpAdapter.patch(
      ['a-edit-specialisation'],
      this.dto?.getChangeDto()
    ).subscribe(
      () => this.onActionSuccess('Специализация изменена'),
      this.errorHandler
    )
  }

  deleteEntity() {
    if (this.dto) {
      HttpAdapter.delete(['a-del-specialisation'], {
        specialisationid: this.dto.id
      }).subscribe(
        () =>
          this.onActionSuccess(`Специализация с ID: ${ this.dto?.id } удалена`),
        this.errorHandler
      )
    }
  }

  private onActionSuccess(msg: string) {
    AlertController.addAlert('Успешно', msg, 'success')
    this.delInit = this.processing = false
    updateEntity<Specialisation>('specialisations', {
      store: this.$store,
      force: true
    })
    this.$router.push(`/specs`)
  }

  errorHandler(err: ResponseModel<any>) {
    AlertController.addAlert('Ошибка', err.message as string, 'error')
    this.processing = false
  }
}
</script>

<style lang="less">
@import '~@/assets/components/edit-styles';

.edit-window {
  .edit-style();
}
</style>
