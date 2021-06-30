<template>
  <div class="edit-window"
       v-if="dto">
    <h2 v-if="!item">Добавление магазина</h2>
    <template v-if="locationStep">
      <h3>Введите локацию</h3>
      <div class="form-field">
        <label>Локация</label>
        <el-input v-model="dto._location" />
        <v-btn
          size="small"
          @click="locationStep = false"
          :disabled="!dto._location"
        >
          Далее
        </v-btn>
      </div>
    </template>
    <template v-else>
      <div class="form-field"
           v-if="dto.id !== 0">
        <label>ID: {{ dto.id }}</label>
      </div>

      <div class="form-field">
        <label
        >Локация:
          {{ dto.location ? dto.location : 'Локация отсутствует' }}</label
        >
      </div>

      <div class="form-field">
        <label>Название: </label>
        <el-input v-model="dto._name"></el-input>
      </div>

      <div class="form-field">
        <label>Баланс: </label>
        <el-input v-model="dto._balance" />
      </div>

      <div class="form-field">
        <label>Лайфстайл: </label>
        <el-select v-model="dto._lifestyle"
                   filterable
                   placeholder="lifestyle">
          <el-option
            v-for="ls of lifestyles"
            :key="ls.id"
            :label="ls.name"
            :value="ls.id"
          />
        </el-select>
      </div>

      <div class="form-field">
        <label>Владелец: </label>
        <el-select v-model="dto._owner"
                   filterable
                   placeholder="Владелец">
          <el-option
            v-for="u of users"
            :key="u.modelId"
            :label="u.name"
            :value="u.modelId"
          />
        </el-select>
      </div>

      <div class="form-field">
        <label>Специализации: </label>
        <el-select
          placeholder="Специализация"
          filterable
          multiple
          v-model="dto._specialisations"
        >
          <el-option
            v-for="s of specialisations"
            :key="s.specialisationId"
            :value="s.specialisationId"
            :label="s.specialisationName"
          />
        </el-select>
      </div>

      <div class="form-field">
        <label>Комментарий: </label>
        <el-input type="textarea"
                  v-model="dto._comment" />
      </div>

      <delete-warn
        v-if="delInit"
        :dto="dto"
        entity-name="магазин"
        @accept="deleteEntity"
        @decline="delInit = false"
      />
      <div class="actions">
        <v-btn size="small"
               v-if="item && !delInit"
               @click="delInit = true">
          Удалить
        </v-btn>
        <v-btn
          size="small"
          @click="item ? edit() : add()"
          :disabled="processing"
        >
          {{ item ? 'Изменить' : 'Добавить' }}
        </v-btn>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import HttpAdapter, { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { ShopDTO } from '@/views/Shops/methods/ShopDTO'
import { Options } from 'vue-class-component'
import DeleteWarn from '@/components/shared/DeleteWarn.vue'
import SrAutocomplete from '@/components/shared/Autocomplete.vue'
import { AlertController } from '@/utils/alertService'
import { Specialisation } from '@/store/products/types'
import { LifeStyle } from '@/store/types'
import { User } from '@/store/user/types'
import { updateEntity } from '@/utils/dictionaryService'
import { ElInput, ElOption, ElSelect } from 'element-plus'

@Options({
  components: { DeleteWarn, SrAutocomplete, ElInput, ElSelect, ElOption }
})
export default class ShopEdit extends Vue {
  @Prop() item!: ResponseModel<Shop>
  @Prop() isAdd!: boolean
  locationStep = false
  delInit = false
  dto: null | ShopDTO = null
  processing = false

  mounted() {
    if (this.isAdd) {
      this.locationStep = true
    }
    this.dto = new ShopDTO(this?.item)
  }

  get specialisations(): Specialisation[] {
    return this.$store.state.specialisations
  }

  get lifestyles(): LifeStyle[] {
    return this.$store.state.lifestyles
  }

  get users(): User[] {
    return this.$store.state.users
  }

  add() {
    this.processing = true
    HttpAdapter.post(['a-add-shop'], this.dto?.getAddDto()).subscribe(
      () => this.onActionSuccess('Магазин добавлен'),
      this.errorHandler
    )
  }

  edit() {
    this.processing = true
    HttpAdapter.patch(['a-edit-shop'], this.dto?.getChangeDto()).subscribe(
      () => this.onActionSuccess('Магазин изменен'),
      this.errorHandler
    )
  }

  deleteEntity() {
    if (this.dto) {
      HttpAdapter.delete(['a-del-shop'], { shopid: this.dto.id }).subscribe(
        () => this.onActionSuccess(`Магазин с ID: ${ this.dto?.id } удален`),
        this.errorHandler
      )
    }
  }

  private onActionSuccess(msg: string) {
    AlertController.addAlert('Успешно', msg, 'success')
    updateEntity<Shop>('shops', { store: this.$store, force: true })
    this.delInit = this.processing = false
    this.$router.push(`/shops`)
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
