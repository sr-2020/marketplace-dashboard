<template>
  <div class="row"
       v-if="!isLoading">
    <h1 class="col-m-3">{{ pageName }}</h1>
    <div class="col-m-1"><button>Изменить</button></div>
    <div class="col-m-3" v-if="!isAdd">
      <component v-if="viewComponent" :item="item" :is="viewComponent" />
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
  item = {}
  isAdd = false
  isLoading = true
  canBeModified = false
  editComponent: unknown = null
  viewComponent: unknown = null


  mounted() {
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
}
</script>

<style scoped></style>
