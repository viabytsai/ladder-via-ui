<template>
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo">
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggle" v-if="codeVisible">隐藏代码</Button>
      <Button @click="toggle" v-else>显示代码</Button>
    </div>
    <div class="demo-code" :class="[codeVisible==true?'demo-code-show':'demo-code-hidden']">
      <pre class="language-html" v-html="Prism.highlight(component.__sourceCode,Prism.languages.html,'html')"></pre>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import {ref} from 'vue';
const Prism = (window as any).Prism;
export default {
  components:{Button},
  props:{
    component:Object
  },
  setup(){
    const codeVisible = ref(false);
    const toggle =()=>{
      codeVisible.value=!codeVisible.value
    }
    return{Prism,codeVisible,toggle}
  }
}
</script>

<style lang='scss' scoped>
$border-color: #ebebeb;
.demo {
  max-width: 500px;
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 4px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
  }

  &-code {
    border-top: 1px solid $border-color;
    overflow: auto;
    &-show{
      max-height: 800px;
      transition: 1s cubic-bezier(.39,.7,.18,.9);
    }
    &-hidden{
      transition: .4s cubic-bezier(.39,.7,.18,.9);
      max-height: 0;
      border: none;
    }
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      background: #fafafa;
    }
  }
}
</style>