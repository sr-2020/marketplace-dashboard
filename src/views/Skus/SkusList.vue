<script lang="ts">
import { Sku } from '@/store/products/types'
import List from '@/components/common/list/List.vue'
import SkusListItem from './SkusListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class SkusList extends List<Sku> {
  listItem = SkusListItem

  mounted() {
    this.grabData(['a-skus'])
  }
}
</script>
