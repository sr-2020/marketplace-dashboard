<template>
  <div class="item-wrapper">
    <div class="item">
      <div>{{ i.name }}</div>
      <div v-if="i.owner">Владелец: {{ i.owner.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Corporation } from "@/store/organisations/types";

@Component({})
export default class CorporationListItem extends Vue {
  @Prop() i!: Corporation;
}
</script>

<style scoped lang="less">
.item {
  padding: 12px 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
