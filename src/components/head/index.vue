<template>
  <header id="header" class="d-f-sb">
    <div class="header-title">
      <div class="title--logo">
        <img src="../../assets/public/logo.png" :alt="title" class="img-m">
      </div>
      <div class="title--text">
        {{title}}
      </div>
    </div>
    <div class="header-navs">
      <ul class="navs-items">
        <li v-for="(item,index) in items" :key="index">
          <div class="d-ib cur">
            <i class="iconfont icon-header-biaoshilei_yuanchengpeizhi"></i>
            <span v-html="item.name"></span>
          </div>
          <ol v-if="item.children">
            <router-link v-for="(it,i) in item.children" :key="i" tag="li" :to="it.path" class="cur">
              {{it.name}}
            </router-link>
          </ol>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import "@/assets/icon/header/iconfont.css";
import { mapState } from "vuex";
import items from "@/utils/nav.ts";
export default {
  data() {
    return {
      title: "Intranet Situation Awareness System"
    };
  },
  computed: {
    ...mapState({
      status: state => {
        return state.headStatus;
      }
    }),
    items() {
      return items;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/public.less");
@height: 84px;
@active-c: #ffe576;
#header {
  height: @height;
  position: absolute;
  top: 0;
  left: 15px;
  right: 15px;
  color: @d-color;
  .header-title {
    line-height: @height;
    display: flex;
  }
  .title--text {
    font-size: 32px;
    font-weight: bold;
  }
  .img-m {
    margin-right: 15px;
    height: 55px;
  }
  .header-navs {
  }
  .navs-items {
    display: flex;
    margin-right: 70px;
    li.active,
    li:hover {
      > div {
        color: @active-c;
      }
    }
    > li {
      flex: 1;
      display: inline-block;
      position: relative;
      i {
        position: relative;
        top: 2px;
        padding-right: 5px;
        font-size: 20px;
      }
      > div {
        display: flex;
        line-height: @height;
        padding: 0 20px;
        font-size: 16px;
      }
      span {
        font-size: 18px;
      }
    }
    > li:hover {
      ol {
        display: inline-block;
      }
    }
    ol {
      display: none;
      position: absolute;
      padding: 0 10px;
      line-height: 34px;
      left: 15px;
      transform: translateY(-20px);
      z-index: 999;
      li {
        width: 200px;
        font-size: 16px;
      }
    }
  }
}
</style>
