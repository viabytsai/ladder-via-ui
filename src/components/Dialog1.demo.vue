<demo>基本用法</demo>
<template>
  <Button @click="toggle">普通调用</Button>
  <Dialog v-model:visible="x"
          :closeOnClickOverlay="false"
          :ok="f1">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>你好</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
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

