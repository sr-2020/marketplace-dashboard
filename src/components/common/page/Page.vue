<template>
  <div class="row"
       v-if="!isLoading">
    <h1 class="col-m-3">{{ pageName }}</h1>
    <div class="col-m-1" v-if="isModifiable">
      <button @click="isEdit = !isEdit">Изменить</button>
    </div>
    <div class="col-m-3"
         v-if="isEditable">
      <component v-if="editComponent"
                 :is="editComponent"
                 :item="item" />
    </div>
    <div class="col-m-3"
         v-else>
      <component v-if="viewComponent"
                 :item="item"
                 :is="viewComponent" />
    </div>

  </div>
  <loader v-else />
</template>
<script lang="ts">
import Loader from '@/components/shared/Loader.vue'
import HttpAdapter from '@/utils/httpAdapter'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { Loader }
})
export default class Page<T> extends Vue {
  pageName = ''
  item: any = null
  isAdd = false
  isEdit = false
  canBeModified = true
  isLoading = true
  editComponent: unknown = null
  viewComponent: unknown = null

  beforeCreate() {
    this.isAdd = !!this.$route?.meta?.add
  }


  grabDataById<T>(commands: string[], keyName: string) {
    const id = this.$route.params.id
    if (!id) {
      return
    }
    HttpAdapter.get(commands, { [keyName]: id }).subscribe(el => {
      this.item = el
      this.isLoading = false
    })
  }
  get isModifiable() {
    return this.canBeModified && !this.isAdd
  }
  get isEditable() {
    return this.isAdd || this.isEdit
  }
}
</script>

<style scoped></style>
