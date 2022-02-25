<template>
  <div>123</div>
  <Tsai/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tsai from  './components/Tsai.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld 缩写 实际上是HelloWorld:HelloWorld
    Tsai

  }
}
</script>
