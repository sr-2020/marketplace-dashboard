<template>
  <div class="lifestyle"
       :class="lifestyle"> {{ decode(lifestyle) }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LifeStyles } from '@/store/types'

@Component
export default class Lifestyle extends Vue {
  @Prop() lifestyle!: LifeStyles

  decode(lifestyle: LifeStyles): string {
    switch (lifestyle.toLowerCase()) {
      case LifeStyles.Wood:
        return 'Дерево'
      case LifeStyles.Bronze:
        return 'Бронза'
      case LifeStyles.Silver:
        return 'Серебро'
      case LifeStyles.Gold:
        return 'Золото'
      case LifeStyles.Platinum:
        return 'Платина'
      case LifeStyles.Iridium:
        return 'Иридий'
      default:
        return 'Неизвестный'
    }
  }
}
</script>

<style scoped>

</style>
