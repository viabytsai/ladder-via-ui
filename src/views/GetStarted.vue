<template>
  <article class="markdown-body">
    <h3>如何使用</h3>
    <div class="text">安装完本组件库之后在main.js中引入样式文件</div>
    <pre><code>import 'ladder-ui/package/lib/ladder.css'</code></pre>
    <div class="text">
      <blockquote>然后再你的代码中写入下面代码</blockquote>
    </div>
    <pre><code>import {Button,Switch,Dialog,Tabs} from ladder-ui</code></pre>
    <h3>Vue单文件使用</h3>
    <pre><code>&lt;template&gt;
&lt;Button&gt;按钮&lt;/Button&gt;
&lt;/template&gt;

&lt;script&gt;
import {Button} from 'ladder-ui'
export default {
  components: {Button}
}
&lt;/script&gt;
</code></pre>
  </article>
</template>

<script lang='ts'>

</script>

<style lang='scss' scoped>
article {
  padding: 18px 0;

  > .text {
    padding-bottom: 8px;
  }
}
</style>