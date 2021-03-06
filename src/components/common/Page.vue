<template>
  <div class="row" v-if="!isLoading">
    <h1 class="col-m-3">{{ pageName }}</h1>
    <pre>{{ item }}</pre>
  </div>
  <loader v-else />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loader from "@/components/shared/Loader.vue";
import HttpAdapter from "@/utils/httpAdapter";

@Component({
  components: { Loader }
})
export default class Page<T> extends Vue {
  pageName = "";
  item = {};
  editMode = false;
  isAdd = !!this.$route.meta?.add;
  isLoading = true;

  grabDataById<T>(commands: string[], keyName: string) {
    const id = this.$route.params.id;
    if (!id) {
      return;
    }
    HttpAdapter.get(commands, { [keyName]: id }).subscribe(el => {
      this.item = el;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped></style>
