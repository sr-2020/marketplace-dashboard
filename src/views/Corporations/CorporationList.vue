<script lang="ts">
import { Component } from "vue-property-decorator";
import { Corporation } from "@/store/organisations/types";
import List from "@/components/common/list/List.vue";
import CorporationListItem from "@/views/Corporations/CorporationListItem.vue";

@Component({})
export default class CorporationList extends List<Corporation> {
  listItem = CorporationListItem;

  mounted() {
    this.grabData(["a-corporations"]);
  }
}
</script>
