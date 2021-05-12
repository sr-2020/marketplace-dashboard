<template>
  <div class="autocomplete">
    <input v-if="!single" type="text" v-model="filter" @focus="open = true" />
    <div v-else class="select"></div>
    <div class="selected-list" v-show="value.length > 0 && !single">
      <span
        class="selected-list__chip"
        v-for="li of selectedList"
        :key="li[idKey]"
      >
        {{ li.name }}&nbsp;<span
          class="selected-list__cross"
          @click="onItemSelect(li)"
          >x</span
        >
      </span>
    </div>
    <ul class="options__wrapper" v-show="open">
      <li
        v-for="li of list"
        :class="[{ selected: selected(li[idKey]) }]"
        :key="li[idKey]"
        @click="onItemSelect(li)"
      >
        {{ li.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'

export default class SrAutocomplete extends Vue {
  @Prop({ default: false }) single!: boolean
  @Prop({ default: [] }) options!: any[]
  @Prop({ default: '' }) idKey!: string
  @Prop({ default: [] }) value!: number[] | number

  onItemSelect(item: any) {
    if (this.single) {
      this.$emit('change', item)
    }
    if (this.value instanceof Array) {
      if (this.value.indexOf(item[this.idKey]) !== -1) {
        this.$emit(
          'change',
          this.value.filter(id => id !== item[this.idKey])
        )
      } else {
        const value = [...this.value, item[this.idKey]]
        this.$emit('change', value)
      }
    }
  }

  selected(id: number) {
    if (this.value instanceof Array) {
      return this.value.indexOf(id) !== -1
    }
    return this.value === id
  }

  get selectedList() {
    return this.options.filter(opt => {
      if (this.value instanceof Array) {
        return this.value.indexOf(opt[this.idKey]) !== -1
      }
    })
  }

  open = false
  filter = ''

  get list() {
    return this.options.filter(el =>
      new RegExp(this.filter.toLowerCase()).test(el.name.toLowerCase())
    )
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/components/input';

.autocomplete {
  display: flex;
  flex-direction: column;
  max-width: 360px;

  input,
  .select {
    .input();
  }

  .selected-list {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0;
    white-space: pre-wrap;

    &__chip {
      display: inline-block;
      padding: 0 8px;
      margin: 4px 4px;
      border-radius: 4px;
      white-space: nowrap;
      background-color: var(--accent);
    }

    &__cross {
      margin-left: 8px;
      cursor: pointer;
    }
  }

  .options__wrapper {
    padding: 0;
    margin-top: 0;
    background-color: var(--accent-sec);
    border-radius: 4px;
    max-height: 250px;
    overflow-y: scroll;

    li {
      padding: 4px 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 40px;
      list-style: none;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      &.selected {
        background: var(--accent-tetriary);
      }

      &:hover {
        background: var(--accent);
      }
    }
  }
}
</style>
