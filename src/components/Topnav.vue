<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ladder"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleButton" @click="toggleAside"></span>
  </div>
</template>

<script lang='ts'>
import {inject, Ref} from 'vue';

export default {
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible') //get
    const toggleAside =()=>{
      asideVisible.value = !asideVisible.value;
    }
    return {toggleAside}
  }
}
</script>

<style lang='scss' scoped>
.topnav{
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-content: center;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {margin: 0 1em;}
    }
  > .toggleButton{
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu{display: none}
    > .logo{margin: 0 auto}
    > .toggleButton{display: inline-block}
  }
}
</style>