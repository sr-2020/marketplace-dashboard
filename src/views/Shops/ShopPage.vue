<script lang="ts">
import Page from "@/components/common/Page.vue";
import { Shop } from "@/store/organisations/types";
import { Options } from "vue-class-component/dist/vue-class-component";

@Options({})
export default class ShopPage extends Page<Shop> {
  pageName = "Магазин";

  mounted() {
    this.grabDataById(["a-shop"], "shopid");
  }
}
</script>
