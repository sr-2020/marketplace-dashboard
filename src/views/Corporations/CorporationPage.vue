<script lang="ts">
import Page from "../../components/common/Page.vue";
import { Corporation } from "@/store/organisations/types";
import { Component } from "vue-property-decorator";

@Component({})
export default class CorporationPage extends Page<Corporation> {
  pageName = "Корпорация";

  mounted() {
    this.grabDataById(["a-corporation"], "corporationId");
  }
}
</script>
