<template>
  <div v-if='dto'>
    <h2>Редактировать специализации</h2>
    <div v-for='(s, idx) of dto.specialisations' :key='idx'>{{ s.specialisationName }} Ratio: {{ s.ratio }}
      <v-btn :disabled='processing' size='small' @click='delSpec(s.specialisationId)'>Удалить</v-btn>
    </div>
    <div class='form-field'>
      <el-select v-model='selectedSpec'
                 filterable
                 :disabled='processing'
                 placeholder='Специализация'>
        <el-option
          v-for='ls of specialisations'
          :key='ls.specialisationId'
          :label='ls.specialisationName'
          :value='ls.specialisationId'
        />
      </el-select>
      <el-input class='ratio-input' v-model='ratio' :disabled='processing' placeholder='ratio' />
      <v-btn size='small' :disabled='isAddDisable()' @click='addSpec(selectedSpec)'>Добавить</v-btn>
    </div>
  </div>
</template>

<script lang='ts'>
import { Prop, Vue } from 'vue-property-decorator'
import { CorporationDTO } from './CorporationDTO'
import { Corporation } from '@/store/organisations/types'
import HttpAdapter, { ResponseModel } from '@/utils/httpAdapter'
import { Specialisation } from '@/store/products/types'
import { AlertController } from '@/utils/alertService'
import { Options } from 'vue-class-component'
import { ElInput, ElOption, ElSelect } from 'element-plus'

@Options({
  components: { ElSelect, ElOption, ElInput }
})
export default class CorporationEdit extends Vue {
  dto: null | CorporationDTO = null
  selectedSpec: Specialisation | null = null
  ratio: string | null = null
  processing = false
  @Prop() item!: ResponseModel<Corporation>

  mounted() {
    this.dto = new CorporationDTO(this.item)
  }

  get specialisations(): Specialisation[] {
    return this.$store.state.specialisations
  }

  delSpec(specialisation: number) {
    this.processing = true

    HttpAdapter.delete(['a-del-corp-specialisation'], {}, {
      data: {
        specialisation,
        corporation: this.dto?.id,
        ratio: 0
      }
    }).subscribe(() => {
        const idx = this.dto?._specialisations.findIndex(spec => spec.specialisationId === specialisation)

        if (typeof idx === 'number') {
          this.dto?._specialisations.splice(idx, 1)
        }
        this.processing = false
      },
      this.errorHandler)
  }

  addSpec(specialisation: number) {
    if (this.ratio === null) {
      return
    }
    this.processing = true
    HttpAdapter.post(['a-add-corp-specialisation'], {
      specialisation,
      corporation: this.dto?.id,
      ratio: +this.ratio.trim()
    }).subscribe(() => {
        const spec = this.specialisations.find(s => s.specialisationId === specialisation) as Specialisation
        const ratio: number = this.ratio !== null ? +this.ratio : 0
        this.dto?._specialisations.push({ ...spec, ratio })
        this.ratio = null
        this.selectedSpec = null
        this.processing = false
      },
      this.errorHandler)
  }

  isAddDisable() {
    if (this.ratio === null) {
      return true
    }

    const num = +this.ratio
    if (isNaN(num)) {
      return true
    }

    return this.processing || this.selectedSpec === null
  }

  errorHandler(err: ResponseModel<any>) {
    AlertController.addAlert('Ошибка', err.message as string, 'error')
    this.processing = false
  }

}
</script>

<style lang='less'>
@import '~@/assets/components/edit-styles';

button {
  margin-left: 8px;
  color: var(--font-prim) !important;
  border: 1px solid var(--accent-sec) !important;
  background: var(--accent) !important;
  cursor: pointer;

  &:disabled {
    color: var(--font-tet) !important;
    border-color: var(--font-sec) !important;
    background: var(--font-sec) !important;
    cursor: unset;
  }
}

.ratio-input {
  margin-top: 12px;
  width: 80px;
}


.edit-window {
  .edit-style();
}
</style>
