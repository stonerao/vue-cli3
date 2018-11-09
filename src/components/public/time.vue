<template>
  <span>
    {{TIME.Formt}}
  </span>
</template>

<script>
import { getNowTime } from "@/utils/utils.js";
export default {
  data() {
    return {
      TIME: {
        Event: null,
        Formt: ""
      }
    };
  },
  mounted() {
    //显示时间
    this.TIME.Event = setInterval(() => {
      this.TIME.Formt = getNowTime();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.TIME.Event);
  }
};
</script>

<style>
</style>
