<script lang="ts">
import { Component } from "vue-property-decorator";
import List from "../../components/common/list/List.vue";
import { AlertMsg } from "@/store/log/types";
import LogsListItem from "@/views/Logs/LogsListItem.vue";

@Component({})
export default class LogsList extends List<AlertMsg> {
  listItem = LogsListItem;
  list = this.$store.state.logs.alerts;
}
</script>
