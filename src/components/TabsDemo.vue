<template>
  <Demo :component="Tabs1Demo"></Demo>
</template>

<script lang='ts'>
import Demo from '../components/Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue'

export default {
  components: {Demo},
  setup(){return{Tabs1Demo}}
}
</script>
