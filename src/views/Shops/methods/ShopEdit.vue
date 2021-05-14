<template>
  <div class="edit-window" v-if="dto">
    <h2 v-if="!item">Добавление магазина</h2>

    <div class="form-field">
      <label v-if="dto.id !== 0">ID: {{ dto.id }}</label>
    </div>

    <div class="form-field">
      <label>Название: </label>
      <input v-model="dto._name" />
    </div>

    <div class="form-field">
      <label>Баланс: </label>
      <input v-model="dto._balance" />
    </div>

    <div class="form-field">
      <label>Лайфстайл: </label>
      <sr-autocomplete
        :options="lifestyles"
        :single="true"
        :filter-disabled="true"
        id-key="id"
        :value="dto._lifestyle"
        @change="dto._lifestyle = $event"
      />
    </div>

    <div class="form-field">
      <label>Владелец: </label>
      <sr-autocomplete
        :single="true"
        :options="users"
        :value="dto._owner"
        id-key="id"
        @change="dto._owner = $event"
      />
    </div>

    <div class="form-field">
      <label>Специализации: </label>
      <sr-autocomplete
        :value="dto._specialisations"
        @change="dto._specialisations = $event"
        :options="specialisations"
        id-key="specialisationId"
      />
    </div>
    <delete-warn
      v-if="delInit"
      :dto="dto"
      entity-name="магазин"
      @accept="deleteShop"
      @decline="delInit = false"
    />
    <div class="actions">
      <button v-if="item && !delInit" @click="delInit = true">
        Удалить
      </button>
      <button @click="item ? editShop() : addShop()" :disabled="processing">
        {{ item ? 'Изменить' : 'Добавить' }}
      </button>
    </div>
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

@Options({
  components: { DeleteWarn, SrAutocomplete }
})
export default class ShopEdit extends Vue {
  @Prop() item!: ResponseModel<Shop>
  delInit = false
  dto: null | ShopDTO = null
  processing = false

  mounted() {
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

  addShop() {
    this.processing = true
    HttpAdapter.post(['a-add-shop'], this.dto?.getAddDto()).subscribe(() => {
      this.processing = false
      AlertController.addAlert('Магазин добавлен успешно', '', 'success')
      this.$router.push('/shops')
    }, this.errorHandler)
  }

  editShop() {
    this.processing = true
    HttpAdapter.patch(['a-edit-shop'], this.dto?.getChangeDto()).subscribe(
      () => {
        this.processing = false
        AlertController.addAlert('Магазин изменен успешно', '', 'success')
        this.$router.push(`/shops`)
      },
      this.errorHandler
    )
  }

  deleteShop() {
    if (this.dto) {
      HttpAdapter.delete(['a-del-shop'], { shopid: this.dto.id }).subscribe(
        () => {
          AlertController.addAlert(
            'Успешно',
            `Магазин с ID: ${this.dto?.id} удален`,
            'success'
          )
          this.delInit = false
        },
        this.errorHandler
      )
    }
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
