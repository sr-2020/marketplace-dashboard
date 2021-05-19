<script lang="ts">
import { Corporation } from '@/store/organisations/types'
import List from '@/components/common/list/List.vue'
import CorporationListItem from '@/views/Corporations/CorporationListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class CorporationList extends List<Corporation> {
  listItem = CorporationListItem
  listName = 'Корпорации'
  key = 'corporations'
}
</script>
