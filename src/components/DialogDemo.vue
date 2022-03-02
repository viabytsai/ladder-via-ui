<template>
  <h1>Dialog组件示例</h1>
  <Demo :component="Dialog1Demo"></Demo>
  <Demo :component="Dialog2Demo"></Demo>
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
        <td class="demo-attr-table-title td">visible</td>
        <td class="demo-attr-table-title td">是否可见</td>
        <td class="demo-attr-table-title td">boolean</td>
        <td class="demo-attr-table-title td">true/false</td>
        <td class="demo-attr-table-title td">false</td>
      </tr>
      <tr>
        <td class="demo-attr-table-title td">closeOnClickOverlay</td>
        <td class="demo-attr-table-title td">点击遮罩层是否关闭</td>
        <td class="demo-attr-table-title td">boolean</td>
        <td class="demo-attr-table-title td">true/false</td>
        <td class="demo-attr-table-title td">false</td>
      </tr>
      <tr>
        <td class="demo-attr-table-title td">ok</td>
        <td class="demo-attr-table-title td">确认触发函数</td>
        <td class="demo-attr-table-title td">function</td>
        <td class="demo-attr-table-title td">---</td>
        <td class="demo-attr-table-title td">---</td>
      </tr>
      <tr>
        <td class="demo-attr-table-title td">cancel</td>
        <td class="demo-attr-table-title td">取消触发函数</td>
        <td class="demo-attr-table-title td">function</td>
        <td class="demo-attr-table-title td">---</td>
        <td class="demo-attr-table-title td">---</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
export default {
  components: {Demo},
  setup() {
    return {Dialog1Demo,Dialog2Demo};
  }
};
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