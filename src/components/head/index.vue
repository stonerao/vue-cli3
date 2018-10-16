<template>
  <div id="head">
    <div class="h-title">
      <img class="h-title--img" src="../../assets/head/logo.png" />
      <span class="h-title--text">
        {{$t("nav.title")}}
      </span>
    </div>
    <ul class="head-navs">
      <li v-for="(item,index) in navs" :key="index" class="cur">
        <div class="head-navs--title">
          <s-icon :xhrf="`#${item.icon}`" class="svg-icon"></s-icon>
          <span>{{item.name}}</span>
          <i class="el-icon-arrow-down head-navs--icon" v-if="item.children"></i>
        </div>
        <ol v-if="item.children" class="head-navs--children">
          <li v-for="(box,i) in item.children" :key="i" v-html="box.name"></li>
        </ol>
      </li>
    </ul>
  </div>
</template> 
<script lang="ts">
import "../../assets/head/iconfont.js";
import icon from "../public/icon.vue";
import navs from "@/utils/nav.ts";
export default {
  components: {
    "s-icon": icon
  },
  data() {
    return {
      navs: navs
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
// .router-link-exact-active {
//   color: #ffbf3b;
// }
</style>

<style lang="less" scoped>
@import url("../../styles/public.less");
#head {
  display: flex;
  justify-content: space-between;
  .h-title {
    line-height: @head-height - 5px;
    padding-left: 20px;
    display: inline-block;
  }
  .h-title--img {
    vertical-align: middle;
    position: relative;
    top: -2px;
    height: 45px;
  }
  .head-navs--icon {
    font-size: 13px;
    margin-left: 3px;
    position: relative;
    top: 2px;
  }
  .h-title--text {
    font-size: 22px;
  }
  .head-navs {
    display: inline-block;
    margin-right: 20px;

    > li {
      display: inline-block;

      // position: relative;
    }
    > li:hover {
      .head-navs--children {
        display: block;
      }
    }
    .head-navs--children {
      background: @i-background;
      position: absolute;
      top: 50px;
      display: none;
      // border-radius: 4px;
      // background: #2f72b6;
      z-index: 10;
      margin-left: 0px;
      padding-top: 30px;
      min-width: 80px;
      li {
        line-height: 36px;
        font-size: 14px;
        padding: 0 10px;
        transition: all 0.2s;
      }
      li:hover {
        background: #f5f5f533;
      }
    }
    .head-navs--title {
      line-height: @head-height;
      font-size: 14px;
      padding: 0 5px;
      span {
        position: relative;
        top: 2px;
      }
    }
    .svg-icon {
      width: 28px;
      height: 26px;
      vertical-align: middle;
    }
  }
}
</style>
