<script lang="ts">
import List from "@/components/common/list/List.vue";
import { Specialisation } from "@/store/products/types";
import SpecialisationsListItem from "./SpecialisationsListItem.vue";
import { Options } from "vue-class-component";

@Options({})
export default class SpecialisationsList extends List<Specialisation> {
  listItem = SpecialisationsListItem;
  preventNavigation = true;

  mounted() {
    this.grabData(["a-specialisations"]);
  }
}
</script>
