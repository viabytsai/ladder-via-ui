<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang='ts'>
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
import Demo from './Demo.vue';
export default {
  components:{Demo, Switch},
  setup(){
    const bool = ref(false)
    return{bool}
  }
}
</script>
