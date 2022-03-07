<template>
  <router-view/>
</template>

<script>
import {provide, ref} from "vue";
import {router} from "./router";

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width<=500 ? false : true) //set
    provide('asideVisible',asideVisible)
    if (width<=500){
      router.afterEach(()=>{ //导航守卫
        asideVisible.value=false;
      })
    }
  }
}
</script>
