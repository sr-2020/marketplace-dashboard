<template>
    <div class="autocomplete"> 
        <input type="text">
        <ul class='options__wrapper'>
            <li> Option </li>
            <li> Option </li>
            <li> Option </li>
            <li> Option </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {Vue, Options, Prop} from 'vue-property-decorator'

export default class SrAutocomplete extends Vue {
  @Prop( {default: false}) multi!: boolean;    

}
</script>

<style lang="less" scope>
@import "~@/assets/components/input";

.autocomplete {
    display: flex;
    flex-direction: column;

    input {
        .input();
    }
}
</style>