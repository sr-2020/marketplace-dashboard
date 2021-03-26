<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Sku } from '@/store/products/types'
import { Options } from 'vue-class-component'

@Options({})
export default class SkuPage extends Page<Sku> {
  pageName = 'Товары'

  mounted() {
    this.grabDataById(['a-sku'], 'skuid')
  }
}
</script>
