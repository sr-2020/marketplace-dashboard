<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import SpecialisationsList from './SpecialisationsList.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { SpecialisationsList, ListItem },
})
export default class Specialisations extends Vue {}
</script>
