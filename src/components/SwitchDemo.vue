<template>
  <div class="container">
    <div class="demo-container">
      <h1>Switch 组件示例 </h1>
      <Demo :component="Switch1Demo"></Demo>
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
          <td class="demo-attr-table-title td">value</td>
          <td class="demo-attr-table-title td">是否选中</td>
          <td class="demo-attr-table-title td">boolean</td>
          <td class="demo-attr-table-title td">false</td>
          <td class="demo-attr-table-title td">false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import Switch1Demo from './Switch1.demo.vue'
import Demo from '../components/Demo.vue'
import Home from '../views/Home.vue';
export default {
  components:{Home, Demo},
  setup(){
    return{Switch1Demo}
  }
}
</script>

<style lang='scss' scoped>
h1{
  padding-bottom: 20px;
}
.demo-attr{
  overflow-x: auto;
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