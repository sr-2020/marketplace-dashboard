<template>
  <div class="autocomplete">
    <input class="--select"
           v-model="filter"
           @focus="open = true" />
    <div class="selected-list"
         v-show="value?.length > 0 && !single">
      <span
        class="selected-list__chip"
        v-for="li of selectedList"
        :key="li[idKey]"
      >
        {{ li.name }}&nbsp;<span
        class="selected-list__cross"
        @click="onItemSelect(li)"
      >
          x
        </span>
      </span>
    </div>
    <ul class="options__wrapper"
        ref="dropdownRef"
        v-show="open">
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
import { Prop, Ref, Vue, Watch } from 'vue-property-decorator'

export default class SrAutocomplete extends Vue {
  @Ref('dropdownRef') dropdownRef!: HTMLElement
  @Prop({ default: false }) single!: boolean
  @Prop({ default: [] }) options!: any[]
  @Prop({ default: false }) filterDisabled!: boolean
  @Prop({ default: '' }) idKey!: string
  @Prop({ default: [] }) value!:
    | number[]
    | number
    | { [key: string]: any }
    | null

  open = false
  filter = ''

  @Watch('open')
  visibleChange(open: boolean) {
    if (open) {
      document.body.addEventListener('click', this.outsideClickHandler)
    } else {
      document.body.removeEventListener('click', this.outsideClickHandler)
    }
  }

  mounted() {
    if (
      this.value !== null &&
      this.single &&
      typeof this.value === 'object' &&
      'name' in this.value
    ) {
      this.filter = this.value.name
    }
    if (typeof this.value === 'number') {
      this.filter = this.options.find(el => el[this.idKey] == this.value)?.name
    }
  }

  onItemSelect(item: any) {
    if (this.single) {
      this.$emit('change', item[this.idKey])
      this.open = false
      if ('name' in item) {
        this.filter = item.name || ''
      }
      return
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
    if (Array.isArray(this.value)) {
      return this.value.indexOf(id) !== -1
    }
    if (
      this.value !== null &&
      typeof this.value == 'object' &&
      this.idKey in this.value
    ) {
      return this.value[this.idKey] === id
    }
  }

  get selectedList() {
    return this.options.filter(opt => {
      if (this.value instanceof Array) {
        return this.value.indexOf(opt[this.idKey]) !== -1
      }
    })
  }

  outsideClickHandler(event: MouseEvent) {
    if (
      !this.dropdownRef.contains(event.target as Node) &&
      !(event.target as HTMLElement).classList.contains('--select')
    ) {
      this.open = false
    }
  }

  get list() {
    if (this.filterDisabled) {
      return this.options
    }
    return this.options.filter(el => {
      return new RegExp(this.filter, 'i').test(el.name)
    })
  }
}
</script>

<style lang="less"
       scoped>
@import '~@/assets/components/input';

.autocomplete {
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 360px;

  input,
  .select {
    .input();
  }

  .select {
    cursor: pointer;
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
    position: absolute;
    top: 100%;
    width: 100%;
    padding: 0;
    margin-top: 8px;
    background-color: var(--accent-sec);
    border-radius: 4px;
    max-height: 250px;
    overflow-y: scroll;
    z-index: 100;

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
