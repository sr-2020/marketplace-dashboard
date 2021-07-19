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
import { Specialisation } from '@/store/products/types'

@Options({
  components: { CorporationList, ListItem }
})
export default class Corporations extends Vue {
  mounted() {
    const store = this.$store
    updateEntity<Corporations>('corporations', {
      store,
      force: true
    })
    updateEntity<Specialisation>('specialisations', { store })
    updateEntity<User>('users', { store })
  }
}
</script>
