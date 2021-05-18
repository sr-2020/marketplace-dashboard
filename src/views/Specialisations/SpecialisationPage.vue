<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Specialisation } from '@/store/products/types'
import SpecialisationView from '@/views/Specialisations/methods/SpecialisationView.vue'
import { Options } from 'vue-class-component'

@Options({})
export default class SpecialisationPage extends Page<Specialisation> {
  pageName = 'Специализация'
  viewComponent = SpecialisationView

  mounted() {
    this.grabDataById(['a-specialisations'], 'specialisationid')
  }
}
</script>
