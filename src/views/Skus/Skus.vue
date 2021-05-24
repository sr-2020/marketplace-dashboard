<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import SkusList from './SkusList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'
import { Sku } from '@/store/products/types'

@Options({
  components: { SkusList, ListItem },

  mounted() {
    updateEntity<Sku>('skus', { store: this.$store })
  }
})
export default class Skus extends Vue {
}
</script>
