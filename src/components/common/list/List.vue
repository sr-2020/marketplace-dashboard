<template>
  <loader v-if="loading" />
  <div class="row list-row"
       v-else>
    <div class="col-m-3 title">
      <h2>{{ listName }}</h2>
      <div class="wrapper">
        <input placeholder="Фильтр"
               v-if="!disableFilter"
               v-model="filter" />
      </div>
      <div class="wrapper">
        <v-btn size="small" v-if="isAddAllowed"
                @click="navigateToItem('add')">
          Добавить
        </v-btn>
        <v-btn size="small" v-if="false">Добавить пакетом</v-btn>
        <v-btn size="small" @click="reload">Обновить</v-btn>
      </div>
    </div>
    <div class="col-m-3"
         v-if="list.length > 0">
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
    <div class="col-m-3"
         v-else-if="list.length === 0">
      Данные отсутствуют
    </div>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/shared/Loader.vue'
import { Subject } from 'rxjs'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'

@Options({
  components: { Loader }
})
export default class List<DataType> extends Vue {
  listItem!: unknown // TODO: Разобраться с типом и переписать позже
  loading = true
  customList: DataType[] = []
  disableFilter = false
  filter = ''
  key = ''
  listName = ''
  preventNavigation = false
  isAddAllowed = false
  private unsubscriber$ = new Subject<void>()

  private grabData() {
    const store = this.$store
    if (this.key && store.state[this.key].length !== 0) {
      this.loading = false
      return
    }

    updateEntity<DataType>(this.key, {
      store,
      callback: () => {
        this.loading = false
      }
    })
  }

  mounted() {
    if (this.key) {
      this.grabData()
    }
  }

  get list(): DataType[] {
    if (this.key) {
      return this.$store.state[this.key].filter((data: any) =>
        new RegExp(this.filter, 'i').test(data.name)
      )
    } else {
      return this.customList
    }
  }

  navigateToItem(id: number | 'add') {
    if (this.preventNavigation) {
      return
    }
    this.$router.push({ path: this.$route.path + `/${ id }` })
  }

  reload() {
    this.loading = true
    updateEntity(this.key, {
      store: this.$store,
      callback: () => (this.loading = false),
      force: true
    })
  }

  destroyed() {
    this.unsubscriber$.next()
    this.unsubscriber$.complete()
  }
}
</script>

<style scoped
       lang="less">
@import '~@/assets/components/button';
@import '~@/assets/components/input';

.list-row {
  .button();

  input {
    .input();
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
