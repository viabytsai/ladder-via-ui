<demo>基本用法</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="学习">学习</Tab>
    <Tab title="睡觉">睡觉</Tab>
    <Tab title="打游戏">打游戏</Tab>
  </Tabs>
</template>

<script lang='ts'>
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
import {ref} from 'vue';
import Demo from './Demo.vue';

export default {
  components: {Demo, Tab, Tabs},
  setup() {
    const x = ref('学习');
    return {x};
  }
};
</script>

<style lang='scss' scoped>

</style>