<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { User } from '@/store/user/types'
import UserView from '@/views/Users/methods/UserView.vue'

export default class UserPage extends Page<User> {
  pageName = 'Пользователи'
  canBeModified = false
  link = 'users'
  viewComponent = UserView

  mounted() {
      this.grabDataById(['a-user'], 'modelId')
  }
}
</script>