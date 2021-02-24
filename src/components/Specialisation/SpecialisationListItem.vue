<template>
  <div class="item-wrapper">
    <div class="item">
      <Lifestyle :lifestyle="i.lifestyle"/>
      <div>Название: {{ i.name }}</div>
      <div>Баланс: {{ i.balance }}</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Specialisation } from '@/store/products/types'
import Lifestyle from '@/components/Shared/Lifestyle.vue'

@Component({
  components: { Lifestyle }
})
export default class SpecialisationListItem extends Vue {
  @Prop() i!: Specialisation

}

</script>

<style scoped
       lang="less">
.item {
  padding: 12px 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
</style>
