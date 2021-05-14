<script lang="ts">
import { Sku } from '@/store/products/types'
import List from '@/components/common/list/List.vue'
import SkusListItem from './SkusListItem.vue'

export default class SkusList extends List<Sku> {
  listItem = SkusListItem
  listName = 'SKU'
  mounted() {
    this.grabData('skus')
  }
}
</script>
