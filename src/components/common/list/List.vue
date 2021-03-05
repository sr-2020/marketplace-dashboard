<template>
  <div class="row" v-if="list.length && listItem">
    <div class="col-m-3">
      <component v-for="i in list" :key="i.id" :is="listItem" :item="i">
      </component>
    </div>
  </div>

  <loader v-else></loader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loader from "@/components/shared/Loader.vue";
import HttpAdapter from "@/utils/httpAdapter";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  components: { Loader }
})
export default class List<DataType> extends Vue {
  listItem!: unknown; // TODO: Разобраться с типом и переписать позже
  list: DataType[] = [];
  private unsubscriber$ = new Subject<void>();

  grabData(commands: string[]) {
    HttpAdapter.get<DataType[]>(commands)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(({ data }) => (this.list = data));
  }

  destroyed() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
</script>
