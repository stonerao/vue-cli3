<template>
    <div class="full" ref="master">

    </div>
</template>

<script>
import echarts from "echarts";
let option = {
  noDataLoadingOption: {
    text: "暂无数据",
    effect: "bubble",
    effectOption: {
      effect: {
        n: 0
      }
    }
  },
  tooltip: {
    trigger: "axis",
    formatter: function(e) {
      return "";
    },
    backgroundColor: "rgba(43,60,89,0.8)"
  },
  grid: {
    show: false,
    left: "20%",
    top: 20,
    right: "5%",
    bottom: 45
  },
  xAxis: {
    data: [1, 2, 3,1,3],
    splitArea: { show: false },
    type: "category",
    min: "dataMin",
    max: "dataMax",
    splitNumber: 3,
    axisLine: {
      lineStyle: {
        type: "solid",
        color: "#329dd1", //左边线的颜色
        width: "1" //坐标线的宽度
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#fff",
      // rotate:55,
      fontSize: 9,
      interval: 24
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#fff"
      }
    }
  },
  yAxis: {
    nameGap: 0,
    type: "value",
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
      show: false,
      lineStyle: {
        color: "#42495a"
      }
    }
  },
  series: [
    {
      type: "line",
      symbol: "none",
      smooth: true,
      data:[1, 2, 3,1,3],
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
        color: "#6dcdff"
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(109, 205, 255, 0.5)"
              },
              {
                offset: 0.5,
                color: "#143059"
              },
              {
                offset: 1,
                color: "rgba(4, 11, 31, 0.5)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: "#fff",
          borderColor: "rgba(126,213,251)",
          borderWidth: 3
        }
      }
    },
    {
      type: "line",
      symbol: "none",
      smooth: true,
      data: [1, 2, 3,1,3],
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
        color: "#4fd9c1"
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(109, 205, 255, 0.5)"
              },
              {
                offset: 0.5,
                color: "#135656"
              },
              {
                offset: 1,
                color: "rgba(30, 156, 126, 0.5)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: "#fff",
          borderColor: "rgba(126,213,251)",
          borderWidth: 3
        }
      }
    }
  ]
};
export default {
  data() {
    return { myMaster: null };
  },
  mounted() {
    this.myMaster = echarts.init(this.$refs["master"]);
    this.myMaster.setOption(option);
  }
};
</script>

<style lang="less" scoped>
</style>
