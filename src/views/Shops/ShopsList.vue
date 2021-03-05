<script lang="ts">
import { Component } from "vue-property-decorator";
import { Shop } from "@/store/organisations/types";
import List from "@/components/common/list/List.vue";
import ShopsListItem from "./ShopsListItem.vue";

@Component({})
export default class ShopsList extends List<Shop> {
  listItem = ShopsListItem;

  mounted() {
    this.grabData(["a-shops"]);
  }
}
</script>
