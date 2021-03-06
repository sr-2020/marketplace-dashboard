<script lang="ts">
import Page from "@/components/common/Page.vue";
import { Specialisation } from "@/store/products/types";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpecialisationPage extends Page<Specialisation> {
  pageName = "Специализация";
}
</script>
