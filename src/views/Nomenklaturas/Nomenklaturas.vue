<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import NomenklaturasList from './NomenklaturasList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from '@/utils/dictionaryService'
import { LifeStyle } from "@/store/types";
import { Specialisation } from "@/store/products/types";

@Options({
  components: { NomenklaturasList, ListItem }
})
export default class Nomenklaturas extends Vue {
  mounted() {
    updateEntity<Nomenklaturas>('nomenklaturas', { store: this.$store, force: true })
    updateEntity<LifeStyle>('lifestyles', {store: this.$store })
    updateEntity<Specialisation>('specialisations', {store: this.$store })
  }
}
</script>
