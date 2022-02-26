<template>
<div>
  <h1>示例1</h1>
  <Button theme="button">button</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
  <h1>示例2</h1>
  <Button size="big">大</Button>
  <Button>中</Button>
  <Button size="small">小</Button>
  <h1>示例3</h1>
  <Button level="danger">危险按钮</Button>
  <Button level="main">普通按钮</Button>
  <h1>示例4</h1>
  <Button disabled>禁用按钮</Button>
  <h1>示例5</h1>
  <Button loading>加载中</Button>
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