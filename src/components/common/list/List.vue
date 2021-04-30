<template>
  <loader v-if="loading" />
  <div class="row list-row" v-else>
    <h2 class="col-m-3 title">
      {{ listName }} <button v-if="isAddAllowed" @click="navigateToItem('add')">Добавить</button> <button v-if="false">Добавить пакетом</button>
    </h2>
    <div class="col-m-3" v-if="list.length > 0">
      <template v-if="listItem">
        <component
          v-for="i in list"
          :key="i.id"
          :is="listItem"
          :item="i"
          @click="navigateToItem(i.id)"
        />
      </template>
      <template v-else>
        Добавьте компонент списка
      </template>
    </div>
    <div class="col-m-3" v-else-if="list.length === 0">
      Данные отсутствуют
    </div>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/shared/Loader.vue'
import HttpAdapter from '@/utils/httpAdapter'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { Loader }
})
export default class List<DataType> extends Vue {
  listItem!: unknown // TODO: Разобраться с типом и переписать позже
  loading = true
  list: DataType[] = []
  listName = ''
  preventNavigation = false
  isAddAllowed = false
  private unsubscriber$ = new Subject<void>()

  grabData(commands: string[]) {
    HttpAdapter.get<DataType[]>(commands)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(
        ({ data }) => {
          this.loading = false
          this.list = data
        },
        () => (this.loading = false)
      )
  }

  navigateToItem(id: number | 'add') {
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

<style scoped lang="less">
@import "~@/assets/components/button";

.list-row {
  .button();
  .title {
    display: flex;
    justify-content: space-between;
  }
}

</style>
