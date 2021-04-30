<template>
  <div class="warning">
    Вы действительно хотите удалить {{entityName}} {{ dto.name }} <br />
    Это действие будет <b>НЕВОЗМОЖНО</b> отменить!!! <br /><br />
    <label>
      Введите ID для удаления <br />
      <input v-model.number="entityId" />
    </label>
    <div>
      <button :disabled="entityId !== dto.id" @click="$emit('accept')">Точно удалить</button>
      <button @click="$emit('decline')">Отменить</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'

export default class DeleteWarn extends Vue {
  entityId: string | number = ''
  @Prop() dto!: any
  @Prop( {default: ''}) entityName!: string
}
</script>
<style lang="less"
       scoped>
@import "~@/assets/components/button";
.warning {
  background: var(--alert-warn);
  width: max-content;
  input {
    margin: 12px 0;
    border: 2px solid var(--accent-sec);
    outline: none;
    background: var(--alert-warn);
    padding: 4px 12px;
    border-radius: 4px;
    color: var(--font-inverted);
    max-width: 100px;
    height: 32px;
  }
  color: var(--font-inverted);
  border-radius: 12px;
  padding: 20px;

  .button()
}

</style>
