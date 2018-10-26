<template>
    <div class="edit--demo" :id="id">

    </div>
</template>

<script>
import echarts from "echarts";
import { isJSON } from "@/utils/public.ts";
export default {
  props: {
    params: String
  },
  data() {
    return {
      id: parseInt(~new Date() + Math.random()) + Math.random() * 100,
      myChart: null
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.id));
    let option = {};
    this.myChart.setOption(option);
    window.addEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.myChart.resize();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  watch: {
    params(val) {  
    //   console.log(isJSON(val)); 
    }
  }
};
</script>

<style lang="less" scoped>
.edit--demo {
  height: 200px;
}
</style>
