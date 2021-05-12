<template>
  <div class="edit-window"
       v-if="dto">
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
      <button v-if="item && !delInit"
              @click="delInit = true">
        Удалить
      </button>
      <button v-if="item">Изменить</button>
      <button v-else>Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import HttpAdapter, { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { ShopDTO } from '@/views/Shops/Shop/ShopDTO'
import { Options } from 'vue-class-component'
import DeleteWarn from '@/components/shared/DeleteWarn.vue'
import SrAutocomplete from '@/components/shared/Autocomplete.vue'
import { AlertController } from '@/utils/alertService'
import { Specialisation } from '@/store/products/types'
import { RootMutations } from '@/store/mutations'
import { LifeStyle } from '@/store/types'
import { User } from '@/store/user/types'

@Options({
  components: { DeleteWarn, SrAutocomplete }
})
export default class ShopEdit extends Vue {
  @Prop() item!: ResponseModel<Shop>
  delInit = false
  dto: null | ShopDTO = null

  mounted() {
    this.dto = new ShopDTO(this?.item)
    const storeSpecialisations = this.$store.state.specialisations
    const storeLifestyles = this.$store.state.lifestyles
    const storeUsers = this.$store.state.users

    if (storeSpecialisations.length === 0) {
      HttpAdapter.get<Specialisation[]>([
        'a-specialisations'
      ]).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_SPECIALISATIONS, data)
      )
    }

    if (storeLifestyles.length === 0) {
      HttpAdapter.get<LifeStyle[]>(['a-lifestyles']).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_LIFESTYLES, data)
      )
    }

    if (storeUsers.length === 0) {
      HttpAdapter.get<User[]>(['a-users']).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_USERS, data)
      )
    }
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

  deleteShop() {
    AlertController.addAlert(
      'Успешно',
      `Магазин с ID: ${ this.dto?.id } удален`,
      'success'
    )
    this.delInit = false
    // Раскомментить как можно будет создавать
    // if(this.dto) {
    //   HttpAdapter.delete(['a-shop-delete'], { shopid: this.dto.id})
    // }
  }
}
</script>

<style lang="less"
       scoped>
@import '~@/assets/components/edit-styles';

.edit-window {
  .edit-style();
}
</style>
