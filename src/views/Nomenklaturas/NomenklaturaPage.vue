<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Nomenklatura } from '@/store/products/types'
import { Options } from 'vue-class-component'

@Options({})
export default class NomenklaturaPage extends Page<Nomenklatura> {
  pageName = 'Номенклатура'

  mounted() {
    this.grabDataById(['a-nomenklatura'], 'nomenklaturaid')
  }
}
</script>
