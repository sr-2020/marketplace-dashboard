<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Specialisation } from '@/store/products/types'
import SpecialisationView from '@/views/Specialisations/methods/SpecialisationView.vue'
import SpecialisationEdit from '@/views/Specialisations/methods/SpecialisationEdit.vue'

export default class SpecialisationPage extends Page<Specialisation> {
  pageName = 'Специализация'
  canBeModified = true
  viewComponent = SpecialisationView
  editComponent = SpecialisationEdit

  mounted() {
    if (this.isAdd) {
      this.isLoading = false
    } else {
      this.grabDataById(['a-specialisation'], 'specialisationid')
    }
  }
}
</script>
