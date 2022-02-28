<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Ladder UI</h1>
        <h2>一个 Vue 3 组件库</h2>
        <p class="actions">
          <a>Github</a>
          <router-link to="/doc">开始使用</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <div>
        <div class="title">基于 Vue3</div>
        <div class="d-x">使用了Vue3 Composition API</div>
      </div>
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <div>
        <div class="title">使用 TypeScript</div>
        <div class="d-x">源代码采用Typescript书写</div>
      </div>
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-code"></use>
      </svg>
      <div>
        <div class="title">代码易读</div>
        <div class="d-x">每个组件的源代码都极其简洁</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>

<style lang='scss' scoped>
$green: #8ba48b;
@media screen and (max-width: 900px){
  .features{
    flex-direction: column;
    padding-bottom: 50px;
    >.item{
      display: block!important;
      text-align: center;
      margin: 0 auto;
      width: 300px;
      padding: 0 40px 30px;
      >svg{
        margin-bottom: 10px!important;
        margin-right: 0!important;
      }
      >div{
        .title{
          font-size: 20px!important;
        }
        .d-x{
          font-size: 15px!important;
        }
      }
    }
  }
}
.features {
  display: flex;
  padding-top: 40px;

  > .item {
    display: flex;
    flex: 1;
    justify-content: center;
    > svg {
      width: 65px;
      height: 65px;
      margin-right: 15px;
    }
    >div{
      .title{
        font-size: 28px;
      }
      .d-x{
        font-size: 20px;
      }
    }
  }
}

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(224, 229, 223, 1) 0%, rgba(181, 196, 177, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #5c724d;

  > h1 {
    font-size: 60px !important;
  }

  > .actions {
    padding: 30px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>