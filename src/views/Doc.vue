<template>
  <div class="layout">
    <Topnav class="nav" :toggle-menu-button-visible="true"/>
    <div class="content">
        <aside :class="{visible:asideVisible}">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import {inject, Ref} from 'vue';
export default {
  components :{Topnav},
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible') //get
    return{
      asideVisible
    }
  }
}
</script>

<style lang='scss' scoped>
:deep(.nav){
  background-color: #fff;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 312px;
    padding-right: 312px;
    @media (max-width: 500px) {
      padding-left: 0;
      padding-right: 0;
    }

  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    z-index: 1;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    @media (max-width: 500px) {
      overflow: auto;
      flex-grow: 1;
    }
  }
}
@media (min-width: 500px) {
  aside{
    transform: translateX(0px)!important;
  }
}
aside {
  width: 240px;
  position: fixed;
  top: 55px;
  left: 0;
  padding:16px 0;
  height: 100%;
  background-color: #f9f9f9;
  transform: translateX(-240px);
  transition: all 0.25s ease;
  &.visible {
    transform: translateX(0px);
  }
  > h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a{
        position: relative;
        display: block;
        padding: 10px 0 10px 25px;
        text-decoration: none;
        font-size: 14px;
      }
      .router-link-active{
        background:#e0e5df;
      }
      .router-link-active::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-right: 3px solid #7d8971;
      }
    }
  }
}
</style>