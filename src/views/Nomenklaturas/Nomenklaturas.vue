<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import NomenklaturasList from './NomenklaturasList.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { NomenklaturasList, ListItem }
})
export default class Nomenklaturas extends Vue {}
</script>
