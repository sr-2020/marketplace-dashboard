<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Nomenklatura } from '@/store/products/types'
import { Options } from 'vue-class-component'
import NomenklaturaView from '@/views/Nomenklaturas/methods/NomenklaturaView.vue'
import NomenklaturaEdit from '@/views/Nomenklaturas/methods/NomenklaturaEdit.vue'

@Options({})
export default class NomenklaturaPage extends Page<Nomenklatura> {
  pageName = 'Номенклатура'
  canBeModified = true
  viewComponent = NomenklaturaView
  editComponent = NomenklaturaEdit
  link = 'nomenklaturas'

  mounted() {
    if (this.isAdd) {
      this.isLoading = false
    } else {
      this.grabDataById(['a-nomenklatura'], 'nomenklaturaid')
    }
  }
}
</script>
