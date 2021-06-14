<script lang="ts">
import List from '@/components/common/list/List.vue'
import { User } from '@/store/user/types'
import UsersListItem from './UsersListItem.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class UsersList extends List<User> {
  listItem = UsersListItem
  listName = 'Пользователи'
  key = 'users'
}
</script>