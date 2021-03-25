<script lang="ts">
import Page from '@/components/common/Page.vue'
import { Specialisation } from '@/store/products/types'
import { Options } from 'vue-class-component'

@Options({})
export default class SpecialisationPage extends Page<Specialisation> {
  pageName = 'Специализация'
}
</script>
