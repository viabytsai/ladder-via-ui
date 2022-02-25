<template>
  <router-view/>
</template>

<script>
import {provide, ref} from "vue";

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    console.log(width)
    const asideVisible = ref(width<=500 ? false : true) //set
    provide('asideVisible',asideVisible)
  }
}
</script>
