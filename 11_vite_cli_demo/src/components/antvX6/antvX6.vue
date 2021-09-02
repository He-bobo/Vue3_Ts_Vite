<!--
 * @Descripttion: 
 * @version: 
 * @Author: xufh
 * @Date: 2021-08-19 11:01:59
 * @LastEditors: xufh
 * @LastEditTime: 2021-08-19 11:53:23
-->
<template>
  <div id="container">

  </div>
</template>

<script lang="ts">
import { Graph, Shape } from "@antv/x6";
import { data } from "./define";

export default {
  methods: {
    init() {
      const graph = new Graph({
        container: document.getElementById("container"),
        width: 1000,
        height: 1000,
      });
      graph.fromJSON(data);
    },
  },
  mounted() {
    this.$nextTick(function () {
      // 仅在渲染整个视图之后运行的代码
      this.init();
    });
  },
};
</script>

<style scoped>
</style>