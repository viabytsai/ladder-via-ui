<demo>函数式调用</demo>
<template>
  <Button @click="showDialog">函数式调用</Button>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title:h('strong',{},'标题'),
        content:'你好',
        ok(){console.log('ok');},
        cancel(){console.log('cancel');}
      })
    }
    return {showDialog};
  }
};
</script>

<style lang='scss' scoped>

</style>