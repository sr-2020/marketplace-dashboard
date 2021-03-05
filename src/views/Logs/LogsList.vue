<script lang="ts">
import { Component } from "vue-property-decorator";
import List from "../../components/common/list/List.vue";
import { AlertMsg } from "@/store/log/types";

@Component({})
export default class LogsList extends List<AlertMsg> {}
</script>
