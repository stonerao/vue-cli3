<template>

</template>

<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      option: {
        color: ["#ff617b", "#32b9da", "#d5a559", "#03d1af"],
        tooltip: {
          trigger: "axis",
          // formatter:'{b}<br />{a0}&emsp;流量:{c0}<br />{a1}&emsp;流量:{c1}<br />{a2}&emsp;流量:{c2}<br />{a3}&emsp;流量:{c3}',
          backgroundColor: "rgba(43,60,89,0.8)"
        },
        xAxis: {
          data: xData,
          boundaryGap: false,
          axisLabel: {
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#42495a"
            }
          }
        },
        yAxis: {
          axisLabel: {
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "#42495a"
            }
          }
        },
        grid: {
          left: 40,
          top: 20,
          right: 25,
          bottom: 30
        },
        series: seriesSet
      }
    };
  }
};
</script>

<style>
</style>
