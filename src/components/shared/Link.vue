<template>
  <span class="entity-link" @click="onClick">
    <slot />
  </span>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'

export type SrEntity = 'user' | 'corporation' | 'sku' | 'specialisation' | 'shop' | 'nomenklatura'

export default class SrEntityLink extends Vue {
  @Prop({ default: '' }) type!: SrEntity
  @Prop({ default: 0 }) to!: number

  onClick() {
    this.$router.push(`/${this.type}s/${this.to}`)
  }
}
</script>

<style lang="less" scoped>
.entity-link {
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: var(--accent);
  }
}
</style>
