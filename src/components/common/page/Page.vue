<template>
  <div class="row"
       v-if="!isLoading">
    <h1 class="col-m-3 title">
      {{ pageName }}
      <div>
        <v-btn v-if="isModifiable"
               size="small"
               @click="isEdit = !isEdit">
          {{ isEdit ? 'Отменить' : 'Изменить' }}
        </v-btn>
        <v-btn size="small"
               @click="backToList">Назад
        </v-btn>
      </div>
    </h1>

    <div class="col-m-3"
         v-if="isEditable">
      <component
        v-if="editComponent"
        :is="editComponent"
        :is-add="isAdd"
        :item="item"
      />
    </div>
    <div class="col-m-3"
         v-else>
      <component v-if="viewComponent"
                 :is="viewComponent"
                 :item="item" />
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
  canBeModified = false
  isLoading = true
  editComponent: unknown = null
  viewComponent: unknown = null
  link = ''

  backToList() {
    this.$router.push(`/${ this.link }`)
  }

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

<style scoped
       lang="less">
.title {
  display: flex;
  justify-content: space-between;
}

button {
  color: var(--font-prim);
  border: 1px solid var(--accent-sec);
  background: var(--accent);
  cursor: pointer;

  &:disabled {
    color: var(--font-tet);
    border-color: var(--font-sec);
    background: var(--font-sec);
    cursor: unset;
  }
}
</style>
