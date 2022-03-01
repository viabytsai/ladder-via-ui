<demo>支持不同等级</demo>
<template>
  <Button level="danger">危险按钮</Button>
  <Button level="main">普通按钮</Button>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';
import Demo from './Demo.vue';
export default {
  components:{Demo, Button}
}
</script>
