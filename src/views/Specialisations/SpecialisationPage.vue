<script lang="ts">
import Page from '@/components/common/page/Page.vue'
import { Specialisation } from '@/store/products/types'
import SpecialisationView from '@/views/Specialisations/methods/SpecialisationView.vue'
import { Options } from 'vue-class-component'
import SpecialisationEdit from "@/views/Specialisations/methods/SpecialisationEdit.vue";

@Options({})
export default class SpecialisationPage extends Page<Specialisation> {
  pageName = 'Специализация'
  viewComponent = SpecialisationView
  isEdit = true
  editComponent = SpecialisationEdit

  mounted() {
    if(this.isAdd) {
      this.isLoading = false
    } else  {
      this.grabDataById(['a-specialisation'], 'specialisationid')
    }
  }
}
</script>
