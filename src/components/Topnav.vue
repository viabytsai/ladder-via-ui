<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ladder"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
      <li>博客</li>
    </ul>
    <svg class="toggleButton"
          @click="toggleAside"
          v-if="toggleMenuButtonVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
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
  padding:10px 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-content: center;
  z-index: 10;
  box-shadow: 0 0 2px #00000040;
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
    height: 36px;
    line-height: 36px;
    > li {margin: 0 1em;}
    }
  > .toggleButton{
    display: inline-block;
    width: 24px;
    height: 24px;
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