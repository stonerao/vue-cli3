<template>
  <div id="_edit" class="not-text">
    <div class="_edit-left" @drop="drop" @dragover="allowDrop">
      <ul>
        <li class="cur" v-for="item in left_item" :key="item.type" :data-id="item.type" v-html="item.name" draggable="true" @dragstart="drag"></li>
      </ul>
    </div>
    <div class="_edit-right display-flex">
      <div class="_edit--left flex-1 _edit--box" v-for="(item,key) in right_right" :key="key">
        <div class="_edit--item" data-type="chart" :data-key="key" :class="`_edit--${key}`" v-for="box in item" :key="box.id" :data-id="box.id" @drop="drop" @dragover="allowDrop" @dragleave="dragleave" @dragenter="dragenter">
          <s-chart :type="box.type" v-if="box.type!=0"></s-chart>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Chart from "@/components/edit/chart.vue";
export default {
  components: {
    "s-chart": Chart
  },
  data() {
    return {
      left_item: [
        { name: "饼状图", type: 1 },
        { name: "折线图", type: 2 },
        { name: "散点图", type: 3 },
        { name: "雷达图", type: 4 },
        { name: "仪表盘", type: 5 }
      ],
      right_right: {
        left: [{ id: 1, type: 0 }, { id: 2, type: 0 }, { id: 3, type: 0 }],
        center: [{ id: 4, type: 0 }, { id: 5, type: 0 }, { id: 6, type: 0 }],
        right: [{ id: 7, type: 0 }, { id: 8, type: 0 }, { id: 9, type: 0 }]
      }
    };
  },
  methods: {
    drop(e) {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("data"));
      document.querySelectorAll("._edit--item").forEach(dom => {
        dom.style.backgroundColor = "";
      });

      //找到当前数组
      const target = e.target.dataset;
      if (!target.type) return;
      let arr = this.right_right[target.key];
      arr.forEach(i => {
        if (i.id == target.id) {
          i.type = parseInt(data.id);
          i.id = Math.random() * 10;
        }
      });
    },
    allowDrop(e) {
      e.preventDefault();
    },
    drag(e) {
      e.dataTransfer.setData("data", JSON.stringify(e.target.dataset));
    },
    dragleave(e) {
      e.target.style.backgroundColor = "";
      console.log("out", e.target.innerHTML);
    },
    dragenter(e) {
      e.target.style.backgroundColor = "#ffffff21";
    }
  },
  mounted() {}
};
</script>

<style lang="less">
#_edit {
  ._edit-left {
    width: 200px;
    li {
      line-height: 30px;
    }
  }
  ._edit-right {
    position: absolute;
    top: 0;
    right: 0;
    left: 200px;
    bottom: 0;
  }
  ._edit--box {
    position: relative;

    > div {
      height: 33%;
      position: relative;
    }
  }
}
</style>
