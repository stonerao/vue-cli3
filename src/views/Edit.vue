<template>
  <div id="_edit" class="not-text">
    <div class="_edit-left" @drop="drop" @dragover="allowDrop">
      <ul>
        <li class="cur" v-for="item in left_item" :key="item.type" :data-id="item.type" v-html="item.name" draggable="true" @dragstart="drag"></li>
      </ul>
    </div>
    <el-dialog title="提示" :visible.sync="visible" width="90%">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
              <el-input v-model="form.name" style="width:100%"></el-input>
            </el-form-item>
            <el-form-item label="高度">
              <el-select v-model="form.height" placeholder="请选择创建的高度" style="width:100%">
                <el-option :label="item" :value="item" v-for="item in boxHeight" :key="item"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="14">
          <el-input type="textarea" :rows="10" placeholder="" v-model="chartItem.code">
          </el-input>
          <pre>
            1
          </pre>
          <s-demo :params="chartItem.code"></s-demo>
        </el-col>

        <el-col :span="24">
          <el-form label-width="80px">

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="visible=false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>

      </el-row>

    </el-dialog>
    <div class="_edit-right display-flex">
      <div class="_edit--box" :class="`_edit--${key}`" :data-type="key" v-for="(item,key) in right_item" :key="key" @drop="drop" @dragover="allowDrop" @dragleave="dragleave" @dragenter="dragenter">
        <div class="_edit--item" :style="{'height':100/boxHeight*box.height+'%'||'33%'}" v-for="box in item" :key="box.id" :data-id="box.id" v-if="box.type!=0">
          <i class="el-icon-setting _edit--setting" @click="setBox(box)"></i>
          <s-box :title="box.name" class="_edit--full">
            <s-chart :type="box.type" :params="box" slot="main"></s-chart>
          </s-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 页面高宽 3 * 6 
 */
import Chart from "@/components/edit/chart.vue";
import Demo from "@/components/edit/demo.vue";
import Box from "@/components/public/box.vue";
export default {
  components: {
    "s-chart": Chart,
    "s-box": Box,
    "s-demo": Demo,
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
      visible: false,
      settingItem: {},
      boxHeight: 3,
      right_item: {
        left: [],
        center: [],
        right: []
      },
      currItem: {},
      form: {
        height: 1,
        name: "",
        position: "",
        id: ""
      },
      chartItem: {
        code: ""
      },
      mode: 1 //1 添加模式 2编辑模式
    };
  },
  methods: {
    setBox(box) {
      this.mode = 2;
      this.form.name = box.name;
      this.form.height = box.height;
      this.form.id = box.id;
      this.form.position = box.position;
      this.visible = true;
    },
    onSubmit() {
      const form = this.form;
      if (this.mode == 1) {
        //添加
        const item = this.currItem;
        let _currArr = this.right_item[item.position];
        _currArr.push({
          ...item,
          height: form.height,
          name: form.name
        });
      } else {
        //编辑 改变你选中的属性
        this.right_item[this.form.position].forEach(x => {
          if (x.id == this.form.id) {
            x.height = this.form.height;
          }
        });
      }
      this.visible = false;
    },
    drop(e) {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("data"));
      document.querySelectorAll("._edit--box").forEach(dom => {
        dom.style.backgroundColor = "";
      });
      //找到当前数组
      const target = e.target.dataset;
      if (!target.type) return;
      let arr = this.right_item[target.type];
      let _id;
      if (arr.length > 0) {
        _id = Math.max.apply(null, arr.map(x => x.id)) + 1;
      } else {
        _id = 1;
      }
      this.visible = true;
      this.mode = 1;
      this.currItem = {
        type: parseInt(data.id),
        id: _id,
        position: target.type
      };
      /* arr.push({
        type: parseInt(data.id),
        id: _id,
        position: target.type
      }); */
      /*  arr.forEach(i => {
        if (i.id == target.id) {
          i.type = parseInt(data.id);
          i.id = Math.random() * 10;
        }
      }); */
    },
    allowDrop(e) {
      e.preventDefault();
    },
    drag(e) {
      e.dataTransfer.setData("data", JSON.stringify(e.target.dataset));
    },
    dragleave(e) {
      e.target.style.backgroundColor = "";
    },
    dragenter(e) {
      e.target.style.backgroundColor = "#ffffff21";
    }
  },
  mounted() {},
  watch: {
    visible(val) {
      if (val === false) {
        this.form = {
          height: 1,
          name: "",
          position: "",
          id: ""
        };
      }
    }
  }
};
</script>

<style lang="less">
pre {
    white-space: pre-wrap;
  }
#_edit {
  ._edit-left {
    width: 200px;
    li {
      line-height: 30px;
    }
  }
  ._edit--left,
  ._edit--right {
    flex: 1;
  }
  ._edit--center {
    flex: 2;
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
      position: relative;
    }
  }
  ._edit--setting {
    position: absolute;
    right: 12px;
    font-size: 14px;
    top: 9px;
    cursor: pointer;
    z-index: 10;
  }
  ._edit--setting:hover {
    color: #fff6a5;
  }
}
._edit--full {
  position: absolute !important;
  left: 3px;
  top: 3px;
  right: 3px;
  bottom: 3px;
}
</style>
