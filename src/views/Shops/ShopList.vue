<script lang="ts">
import { Component } from "vue-property-decorator";
import { Shop } from "@/store/organisations/types";
import List from "@/components/common/list/List.vue";
import ShopListItem from "@/views/Shops/ShopListItem.vue";

@Component({})
export default class ShopList extends List<Shop> {
  listItem = ShopListItem;

  mounted() {
    this.grabData(["a-shops"]);
  }
}
</script>
