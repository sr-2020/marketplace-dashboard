<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import ListItem from '@/components/common/list/ListItem.vue'
import ShopsList from './ShopsList.vue'
import { Options, Vue } from 'vue-class-component'
import { updateEntity } from "@/utils/dictionaryService";
import { Specialisation } from "@/store/products/types";
import { LifeStyle } from "@/store/types";
import { User } from "@/store/user/types";

@Options({
  components: { ShopsList, ListItem },
})
export default class Shops extends Vue {
  mounted() {
    const store = this.$store
    updateEntity<Specialisation>('specialisations', { store })
    updateEntity<LifeStyle>('lifestyles', { store })
    updateEntity<User>('users', { store })
  }
}
</script>
