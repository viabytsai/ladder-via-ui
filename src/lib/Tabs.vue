<template>
  <div class="ladder-tabs">
    <div class="ladder-tabs-nav" ref="container">
      <div :ref="el => { if (el) navItems[index] = el }"
            class="ladder-tabs-nav-item "
           :class="{selected:t===selected}"
           v-for="(t,index) in titles" :key="index"
           @click="select(t)">{{ t }}
      </div>
      <div ref="indicator"
           class="ladder-tabs-nav-indicator"></div>
    </div>
    <div class="ladder-tabs-content">
      <component class="ladder-tabs-content-item"
                 :class="{selected: c.props.title === selected }"
                 v-for="(c,index) in defaults" :is="c" :key="index"
      ></component>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';
import {onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const navItems = ref < HTMLDivElement[] > ([]);
    const indicator = ref < HTMLDivElement > (null);
    const container = ref < HTMLDivElement > (null)

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title:string)=>{
      context.emit('update:selected',title)
    };
    const x =()=>{
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width=width+'px' //动态设置小横条的位置，实现小横条的宽度和导航item一样宽
      const {left:left1}=container.value.getBoundingClientRect();
      const {left:left2}=result.getBoundingClientRect();
      const left = left2-left1;
      indicator.value.style.left=left +'px' //动态设置小横条的宽度，实现小横条在点击不同的导航item后跳动到不同的导航item
    }
    onMounted(x);
    onUpdated(x);
    return {container,indicator,navItems,defaults, titles,select};
  }
};
</script>

<style lang='scss'>
$blue: #40a9ff;
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
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>