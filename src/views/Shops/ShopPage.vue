<script lang="ts">
import { Component } from "vue-property-decorator";
import Page from "@/components/common/Page.vue";
import { Shop } from "@/store/organisations/types";

@Component({})
export default class ShopPage extends Page<Shop> {
  pageName = "Магазин";

  mounted() {
    this.grabDataById(["a-shop"], "shopid");
  }
}
</script>
