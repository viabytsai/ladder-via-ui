<template>
<button class="ladder-switch"
        :class="{'ladder-checked':value}"
        @click="toggle"
>
  <span></span>
</button>
</template>

<script lang='ts'>
import {ref} from 'vue';
export default {
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      //context.emit('input',!props.value)
      context.emit('update:value',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang='scss' >
$h:22px;
$h2:$h - 4px;
.ladder-switch{
  height: $h;
  width: $h*2;
  border: none ;
  background: grey;
  border-radius: $h/2;
  position: relative;

  >span{
    position: absolute;
    top: 2px;
    left: 2px;
    height:$h2;
    width: $h2;
    background: white;
    border-radius:$h2 / 2;
    transition: left 250ms;
  }
  &.ladder-checked{
    background: #b7c1b6;
  }
  &.ladder-checked > span {
    left: calc(100% - #{$h2} - 2px );
  }
  &:focus{
    outline: none;
  }
}


</style>