<script lang="ts">
import Page from '../../components/common/page/Page.vue'
import { Corporation } from '@/store/organisations/types'
import { Options } from 'vue-class-component'

@Options({})
export default class CorporationPage extends Page<Corporation> {
  pageName = 'Корпорация'

  mounted() {
    this.grabDataById(['a-corporation'], 'corporationId')
  }
}
</script>
