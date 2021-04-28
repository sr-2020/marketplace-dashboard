<template>
 <div>

 </div>
</template>

<script lang="ts">
import {Vue, Prop} from 'vue-property-decorator'
import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from "@/store/organisations/types";
import { ShopDTO } from "@/views/Shops/Shop/ShopDTO";

export default class ShopEdit extends Vue {
  @Prop() item!: ResponseModel<Shop>
  dto = null

  mounted() {
    this.dto = new ShopDTO()
  }
}
</script>

<style scoped>

</style>
