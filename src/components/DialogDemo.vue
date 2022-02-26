<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :closeOnClickOverlay="false"
          :ok="f1"></Dialog>
</template>

<script lang='ts'>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1= ()=>{return false} //让ok按钮无法关闭
    return {x, toggle,f1};
  }
};
</script>

<style lang='scss' scoped>

</style>