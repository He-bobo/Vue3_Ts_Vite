<!--
 * @Descripttion: 
 * @version: 
 * @Author: xufh
 * @Date: 2021-06-30 17:14:43
 * @LastEditors: xufh
 * @LastEditTime: 2021-08-19 11:05:18
-->
<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite +antv | X6" /> -->
    <AntvX />
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import AntvX from "./components/antvX6/antvX6.vue";
export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    AntvX,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
