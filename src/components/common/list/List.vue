<template>
  <div class="row" v-if="list.length && listItem">
    <div class="col-m-3">
      <component
        v-for="i in list"
        :key="i.id"
        :is="listItem"
        :item="i"
        @click="navigateToItem(i.id)"
      >
      </component>
    </div>
  </div>

  <loader v-else></loader>
</template>

<script lang="ts">
import Loader from '@/components/shared/Loader.vue'
import HttpAdapter from '@/utils/httpAdapter'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { Loader },
})
export default class List<DataType> extends Vue {
  listItem!: unknown // TODO: Разобраться с типом и переписать позже
  list: DataType[] = []
  preventNavigation = false

  private unsubscriber$ = new Subject<void>()

  grabData(commands: string[]) {
    HttpAdapter.get<DataType[]>(commands)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(({ data }) => (this.list = data))
  }

  navigateToItem(id: number) {
    if (this.preventNavigation) {
      return
    }
    this.$router.push({ path: this.$route.path + `/${id}` })
  }

  destroyed() {
    this.unsubscriber$.next()
    this.unsubscriber$.complete()
  }
}
</script>
