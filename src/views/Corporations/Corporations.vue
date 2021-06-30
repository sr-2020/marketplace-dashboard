<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import CorporationList from './CorporationList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'
import { User } from '@/store/user/types'

@Options({
  components: { CorporationList, ListItem }
})
export default class Corporations extends Vue {
  mounted() {
    updateEntity<Corporations>('corporations', {
      store: this.$store,
      force: true
    })
    updateEntity<User>('users', { store: this.$store })
  }
}
</script>
