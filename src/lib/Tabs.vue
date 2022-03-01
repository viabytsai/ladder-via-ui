<template>
  <div class="ladder-tabs">
    <div class="ladder-tabs-nav" ref="container">
      <div :ref="el => { if (t===selected) selectedItem = el }"
            class="ladder-tabs-nav-item "
           :class="{selected:t===selected}"
           v-for="(t,index) in titles" :key="index"
           @click="select(t)">{{ t }}
      </div>
      <div ref="indicator"
           class="ladder-tabs-nav-indicator"></div>
    </div>
    <div class="ladder-tabs-content">
<!--      class="ladder-tabs-content-item"-->
<!--      :class="{selected: c.props.title === selected }"-->
<!--      v-for="(c,index) in defaults" :is="c" :key="index"-->
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect();//获取element元素的宽度
      indicator.value.style.width = width + 'px'; //动态设置小横条的位置，实现小横条的宽度和导航item一样宽
      const {left: left1} = container.value.getBoundingClientRect(); //解构赋值重命名
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px'; //动态设置小横条的宽度，实现小横条在点击不同的导航item后跳动到不同的导航item
    };
    onMounted(x);
    onUpdated(x);
    //用watchEffect会报错
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const current = computed(()=>{
      return defaults.find(tag=>tag.props.title===props.selected)
    })
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {container, indicator, selectedItem, defaults, titles,current,select};
  }
};
</script>

<style lang='scss'>
$green: #7d8971;
$color: #333;
$border-color: #d9d9d9;
.ladder-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $green;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $green;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    //&-item {
    //  display: none;
    //
    //  &.selected {
    //    display: block;
    //  }
    //}
  }
}
</style>