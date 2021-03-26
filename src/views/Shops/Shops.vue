<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import ShopsList from './ShopsList.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: { ShopsList, ListItem },
})
export default class Shops extends Vue {}
</script>
