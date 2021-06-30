<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import UsersList from './UsersList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'
import { User } from '@/store/user/types'

@Options({
  components: { UsersList, ListItem }
})
export default class Users extends Vue {
  mounted() {
    updateEntity<Users>('users', {
      store: this.$store,
      force: true
    })
    updateEntity<User>('users', { store: this.$store })
  }
}
</script>