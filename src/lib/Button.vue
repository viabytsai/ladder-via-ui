<template>
<button class="ladder-button"
        :class="`theme-${theme}`"
>
  <slot></slot>
</button>
</template>

<script lang='ts'>
export default {
  props:{
    theme:{
      type:String,
      default:'button'
    },
  }
}
</script>

<style lang='scss' scoped>

</style>