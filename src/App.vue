<template>
  <div id="app">
    <s-head id="head" class="s-box"></s-head>
    <s-scroll class="view"> 
      <router-view  slot="main"/>
    </s-scroll>

  </div>
</template>
<script>
import Head from "./components/head/index";
import scroll from "./components/public/scroll";
export default {
  components: {
    "s-head": Head,
    "s-scroll": scroll
  }
};
</script>

<style lang="less">
@import url("./styles/reset.less");
@import url("./styles/public.less");
@import url("./styles/index.less");
#app {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: @i-background;
  min-width: @min-width;
} 
#head {
  color: @font-color;
  height: @head-height;
  position: absolute;
  left: @margin;
  right: @margin;
  top: @margin;
  // background: url("./assets/head/background.png") no-repeat center;
  // border:2px solid @font-icolor; 
  background-size: 100% 100%;
}
.view {
  position: absolute;
  left: @margin;
  right: @margin;
  top: 90px;
  bottom: @margin; 
  color:#fff;
}
</style>
