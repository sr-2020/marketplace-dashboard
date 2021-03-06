<script lang="ts">
import { Component } from "vue-property-decorator";
import List from "@/components/common/list/List.vue";
import { Specialisation } from "@/store/products/types";
import SpecialisationsListItem from "./SpecialisationsListItem.vue";

@Component({})
export default class SpecialisationsList extends List<Specialisation> {
  listItem = SpecialisationsListItem;
  preventNavigation = true;

  mounted() {
    this.grabData(["a-specialisations"]);
  }
}
</script>
