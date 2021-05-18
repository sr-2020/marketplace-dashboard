<script lang="ts">
import { Shop } from '@/store/organisations/types'
import List from '@/components/common/list/List.vue'
import ShopsListItem from './ShopsListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class ShopsList extends List<Shop> {
  listItem = ShopsListItem
  isAddAllowed = true
  listName = 'Магазины'
  key = 'shops'
}
</script>
