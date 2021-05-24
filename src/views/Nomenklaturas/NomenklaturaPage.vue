<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Nomenklatura } from '@/store/products/types'
import { Options } from 'vue-class-component'
import NomenklaturaView from '@/views/Nomenklaturas/Methods/NomenklaturaView.vue'
import NomenklaturaEdit from '@/views/Nomenklaturas/Methods/NomenklaturaEdit.vue'

@Options({})
export default class NomenklaturaPage extends Page<Nomenklatura> {
  pageName = 'Номенклатура'
  canBeModified = true
  viewComponent = NomenklaturaView
  editComponent = NomenklaturaEdit

  mounted() {
    if (this.isAdd) {
      this.isLoading = false
    } else {
      this.grabDataById(['a-nomenklatura'], 'nomenklaturaid')
    }
  }
}
</script>
