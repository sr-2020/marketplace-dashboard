<template>
  <div class="container">
        <div class="row">
      <SpecialisationListItem
        class="col-m-3 list-item"
        v-for="i in specialisationList"
        :key="i.id"
        :i="i"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Specialisation } from "@/store/products/types";
import HttpAdapter from "@/utils/httpAdapter";
import { Component, Vue } from "vue-property-decorator";
import SpecialisationListItem from "@/components/Specialisation/SpecialisationListItem.vue"

@Component({
  components: { SpecialisationListItem }
})
export default class SpecialisationList extends Vue {
  private specialisationList_: Specialisation | Specialisation[] = [];

  set specialisationList(list: Specialisation | Specialisation[]) {
    this.specialisationList_ = list;
    }

  get specialisationList (): Specialisation | Specialisation[] {
      return this.specialisationList_;
    }

  mounted () {
    HttpAdapter.get<Specialisation[]>(["a-specialisations"]).subscribe(
      ({ data }) => (this.specialisationList = data)
    );
  }
}
</script>

<style lang="less" scoped>
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
