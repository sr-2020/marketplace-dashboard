<template>
  <div class="container">
    <div class="row">
      <Loader text="Загрузка" v-if="isLoading"></Loader>
      <ShopListItem
        class="col-m-3 list-item"
        v-for="i in shopList"
        :key="i.id"
        :i="i"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HttpAdapter from "@/utils/httpAdapter";
import ShopListItem from "@/components/Shops/ShopListItem.vue";
import { Shop } from "@/store/organisations/types";
import Loader from "@/components/shared/Loader.vue";

@Component({
  components: { Loader, ShopListItem }
})
export default class ShopList extends Vue {
  private shopList_: Shop | Shop[] = [];
  private isLoading = true;

  set loading(loading: boolean) {
    this.isLoading = loading;
  }

  get loading(): boolean {
    return this.isLoading;
  }

  set shopList(list: Shop | Shop[]) {
    this.shopList_ = list;
  }

  get shopList(): Shop | Shop[] {
    return this.shopList_;
  }

  mounted() {
    HttpAdapter.get<Shop>(["a-shops"]).subscribe(({ data }) => {
      this.loading = false;
      this.shopList = data;
    });
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
