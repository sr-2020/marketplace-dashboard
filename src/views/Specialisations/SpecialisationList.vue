<script lang="ts">
import { Component } from "vue-property-decorator";
import List from "@/components/common/list/List.vue";
import { Specialisation } from "@/store/products/types";
import SpecialisationListItem from "@/views/Specialisations/SpecialisationListItem.vue";

@Component({})
export default class SpecialisationList extends List<Specialisation> {
  listItem = SpecialisationListItem;

  mounted() {
    this.grabData(["a-specialisations"]);
  }
}
</script>
