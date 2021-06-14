<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { User } from '@/store/user/types'


export default class UserPage extends Page<User> {
  pageName = 'Пользователи'
  canBeModified = false
  link = 'users'
  
  mounted() {
      this.grabDataById(['a-user'], 'model')
  }
}
</script>