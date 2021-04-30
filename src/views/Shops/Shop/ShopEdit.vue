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

    <delete-warn
      v-if="delInit"
      :dto="dto"
      entity-name="магазин"
      @accept="deleteShop"
      @decline="delInit = false"
    />

    <div class="actions">
      <button v-if="item && !delInit"
              @click="delInit = true">Удалить
      </button>
      <button v-if="item">Изменить</button>
      <button v-else>Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { ShopDTO } from '@/views/Shops/Shop/ShopDTO'
import { Options } from 'vue-class-component'
import DeleteWarn from '@/components/shared/DeleteWarn.vue'

@Options({
  components: { DeleteWarn }
})
export default class ShopEdit extends Vue {
  @Prop() item!: ResponseModel<Shop>
  delInit = false
  dto: null | ShopDTO = null

  mounted() {
    this.dto = new ShopDTO(this?.item)
  }

  deleteShop() {
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
