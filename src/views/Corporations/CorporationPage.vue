<script lang="ts">
import Page from '../../components/common/page/Page.vue'
import { Corporation } from '@/store/organisations/types'
import CorporationView from "@/views/Corporations/methods/CorporationView.vue";

export default class CorporationPage extends Page<Corporation> {
  pageName = 'Корпорация'
  canBeModified = false
  viewComponent = CorporationView
  link = 'corporations'

  mounted() {
    this.grabDataById(['a-corporation'], 'corporationId')
  }
}
</script>
