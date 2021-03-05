<template>
  <div class="list__item">
    <div>Тип: {{ item.type }}</div>
    <div>Сообщение: {{ item.msg }}</div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import ListItem from "../../components/common/list/ListItem.vue";
import { AlertMsg } from "@/store/log/types";

@Component({})
export default class LogsListItem extends ListItem<AlertMsg> {}
</script>

<style lang="less">
@import "~@/assets/components/list-item";

.list__item {
  .list-item();
}
</style>
