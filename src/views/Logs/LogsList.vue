<script lang="ts">
import List from "../../components/common/list/List.vue";
import { AlertMsg } from "@/store/log/types";
import LogsListItem from "@/views/Logs/LogsListItem.vue";
import { Options } from "vue-class-component/dist/vue-class-component";

@Options({})
export default class LogsList extends List<AlertMsg> {
  listItem = LogsListItem;
  preventNavigation = true;
  list = this.$store.state.logs.alerts;
}
</script>
