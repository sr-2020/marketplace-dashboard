<script lang="ts">
import { Nomenklatura } from '@/store/products/types'
import List from '@/components/common/list/List.vue'
import NomenklaturasListItem from './NomenklaturasListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class NomenklaturasList extends List<Nomenklatura> {
  listItem = NomenklaturasListItem

  mounted() {
    this.grabData(['a-nomenklaturas'])
  }
}
</script>
