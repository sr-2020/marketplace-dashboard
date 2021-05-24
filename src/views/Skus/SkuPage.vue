<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Sku } from '@/store/products/types'
import SkuView from '@/views/Skus/methods/SkuView.vue'
import SkuEdit from "@/views/Skus/methods/SkuEdit.vue";

export default class SkuPage extends Page<Sku> {
  pageName = 'SKU'
  canBeModified = true
  viewComponent = SkuView
  editComponent = SkuEdit

  mounted() {
    if (this.isAdd) {
      this.isLoading = false
    } else {
      this.grabDataById(['a-sku'], 'skuid')
    }
  }
}
</script>
