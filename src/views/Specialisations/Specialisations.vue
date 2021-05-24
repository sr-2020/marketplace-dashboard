<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import SpecialisationsList from './SpecialisationsList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'
import { ProductType, Specialisation } from '@/store/products/types'

@Options({
  components: { SpecialisationsList, ListItem }
})
export default class Specialisations extends Vue {
  mounted() {
    updateEntity<Specialisation>('specialisations', {
      store: this.$store,
      force: true
    })
    updateEntity<ProductType>('producttypes', { store: this.$store })
  }
}
</script>
