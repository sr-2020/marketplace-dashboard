<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Shop } from '@/store/organisations/types'
import { Options } from 'vue-class-component'
import ShopView from "@/views/Shops/Shop/ShopView.vue";
import ShopEdit from "@/views/Shops/Shop/ShopEdit.vue";

@Options({})
export default class ShopPage extends Page<Shop> {
  pageName = 'Магазин'
  viewComponent = ShopView
  editComponent = ShopEdit

  mounted() {
    if(this.isAdd) {
      this.isLoading = false
    } else  {
      this.grabDataById(['a-shop'], 'shopid')
    }
  }
}
</script>
