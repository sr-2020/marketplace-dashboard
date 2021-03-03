<script lang="ts">
import HttpAdapter from "@/utils/httpAdapter";
import { Component } from "vue-property-decorator";
import { Corporation } from "@/store/organisations/types";
import CorporationListItem from "@/components/Corporation/CorporationListItem.vue";
import List from "@/components/common/list/List.vue";

@Component({
  components: { CorporationListItem }
})
export default class CorporationList extends List<Corporation> {
  mounted() {
    HttpAdapter.get<Corporation[]>(["a-corporations"]).subscribe(
      ({ data }) => (this.list = data)
    );
  }
}
</script>

<style scoped lang="less">
.list-item {
  border: 2px solid var(--border);
  border-radius: 4px;
  margin-bottom: 12px;
  background: var(--bg);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--accent);
  }
}
</style>
