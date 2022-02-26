<template>
<div>
  <h1>示例1</h1>
  <Button>123</Button>
  <Button theme="button">123</Button>
  <Button theme="link">123</Button>
  <Button theme="text">123</Button>
  <h1>示例2</h1>
  <Button size="big">大</Button>
  <Button>中</Button>
  <Button size="small">小</Button>
</div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
  components:{Button}
}
</script>

<style lang='scss' scoped>

</style>