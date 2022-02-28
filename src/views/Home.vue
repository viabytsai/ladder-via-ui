<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Ladder UI</h1>
        <h2>基于VUE3的UI库</h2>
        <p class="actions">
          <a>Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-code"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>

<style lang='scss' scoped>
$green:#8ba48b;
.features{
  >svg {
    width: 64px;
    height:64px;
  }
}
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(224,229,223,1) 0%, rgba(181,196,177,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

}
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #5c724d;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background:$green;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding:8px 24px;
      &:hover{
        text-decoration: none;
    }
    }
  }
}
</style>