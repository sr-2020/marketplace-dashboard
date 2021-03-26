<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import SkusList from './SkusList.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { SkusList, ListItem },
})
export default class Skus extends Vue {}
</script>
