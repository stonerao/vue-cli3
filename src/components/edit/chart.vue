<template>
  <div class="box-full" :id="id">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["type", "params"],
  data() {
    return {
      id: parseInt(~new Date() + Math.random()) + Math.random() * 100,
      myChart: null
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.id));
    let option = null;
    switch (this.type) {
      case 1:
        option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            x: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" }
              ]
            }
          ]
        };
        break;
      case 2:
        option = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line"
            }
          ]
        };
        break;
      case 3:
        option = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              symbolSize: 20,
              data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
              ],
              type: "scatter"
            }
          ]
        };
        break;
      case 4:
        option = {
          title: {
            text: "基础雷达图"
          },
          tooltip: {},
          legend: {
            data: [
              "预算分配（Allocated Budget）",
              "实际开销（Actual Spending）"
            ]
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: "#fff",
                backgroundColor: "#999",
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: "销售（sales）", max: 6500 },
              { name: "管理（Administration）", max: 16000 },
              { name: "信息技术（Information Techology）", max: 30000 },
              { name: "客服（Customer Support）", max: 38000 },
              { name: "研发（Development）", max: 52000 },
              { name: "市场（Marketing）", max: 25000 }
            ]
          },
          series: [
            {
              name: "预算 vs 开销（Budget vs spending）",
              type: "radar",
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [4300, 10000, 28000, 35000, 50000, 19000],
                  name: "预算分配（Allocated Budget）"
                },
                {
                  value: [5000, 14000, 28000, 31000, 42000, 21000],
                  name: "实际开销（Actual Spending）"
                }
              ]
            }
          ]
        };
        break;
      case 5:
        option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: "业务指标",
              type: "gauge",
              detail: { formatter: "{value}%" },
              data: [{ value: 50, name: "完成率" }]
            }
          ]
        };
        break;
      default:
        option = {};
    }
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
    type(val) {
      console.log(val);
    },
    ["params.height"](val) {
      console.log(val);
      this.myChart.resize();
    }
  }
};
</script>

<style lang="less" scoped>
</style>
