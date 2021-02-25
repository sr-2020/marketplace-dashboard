<template>
  <div class="container">
    <div class="row">
      <CorporationListItem
        class="col-m-3 list-item"
        v-for="i in corporationList"
        :key="i.id"
        :i="i"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HttpAdapter from "@/utils/httpAdapter";
import { Component, Vue } from "vue-property-decorator";
import { Corporation } from "@/store/organisations/types";
import CorporationListItem from "@/components/Corporation/CorporationListItem.vue";

@Component({
  components: { CorporationListItem }
})
export default class CorporationList extends Vue {
  private corporationList_: Corporation | Corporation[] = [];

  set corporationList(list: Corporation | Corporation[]) {
    this.corporationList_ = list;
  }

  get corporationList(): Corporation | Corporation[] {
    return this.corporationList_;
  }

  mounted() {
    HttpAdapter.get<Corporation>(["a-corporations"]).subscribe(
      ({ data }) => (this.corporationList = data)
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
