<!--
 * @Descripttion: 
 * @version: 
 * @Author: xufh
 * @Date: 2021-06-30 17:14:43
 * @LastEditors: xufh
 * @LastEditTime: 2021-08-19 11:03:24
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button"
            @click="count++">count is: {{ count }}</button>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
