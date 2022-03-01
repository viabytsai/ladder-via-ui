<template>
<div>
  <h1>Button组件示例</h1>
  <Demo :component="Button1Demo"></Demo>
  <Demo :component="Button2Demo"></Demo>
  <Demo :component="Button3Demo"></Demo>
  <Demo :component="Button4Demo"></Demo>
  <Demo :component="Button5Demo"></Demo>
</div>
  <div class="demo-attr">
    <h2>Attributes</h2>
    <table class="demo-attr-table">
      <thead>
      <tr>
        <th class="demo-attr-table-title">参数</th>
        <th class="demo-attr-table-title">说明</th>
        <th class="demo-attr-table-title">类型</th>
        <th class="demo-attr-table-title">可选值</th>
        <th class="demo-attr-table-title">默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="demo-attr-table-title td">theme</td>
        <td class="demo-attr-table-title td">按钮主题</td>
        <td class="demo-attr-table-title td">string</td>
        <td class="demo-attr-table-title td">button/link/text</td>
        <td class="demo-attr-table-title td">button</td>
      </tr>
      <tr>
        <td class="demo-attr-table-title td">size</td>
        <td class="demo-attr-table-title td">按钮大小</td>
        <td class="demo-attr-table-title td">string</td>
        <td class="demo-attr-table-title td">normal/big/small</td>
        <td class="demo-attr-table-title td">normal</td>
      </tr>
      <tr>
        <td class="demo-attr-table-title td">loading</td>
        <td class="demo-attr-table-title td">加载按钮</td>
        <td class="demo-attr-table-title td">boolean</td>
        <td class="demo-attr-table-title td">true/false</td>
        <td class="demo-attr-table-title td">false</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
import Demo from './Demo.vue'
export default {
  components:{Demo},
  setup(){return{Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo}}
}
</script>

<style lang='scss' scoped>
h1{
  padding-bottom: 20px;
}
.demo-attr{
  >h2{
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  &-table{
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    &-title{
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
    }
    &-title.td{
      color: #606266;
    }
  }
}
</style>