<template>
  <y-scroll id="app" :class="indexBackground">
    <s-head class="s-box head" slot="main"></s-head>
    <y-scroll class="view" slot="main">
      <router-view slot="main" />
    </y-scroll>

  </y-scroll>
</template>
<script>
import Head from "./components/head/index";
export default {
  created() {
    console.log(this.$route.path);
  },
  components: {
    "s-head": Head
  },
  computed: {
    indexBackground() {
      if (this.$route.path == "/" || this.$route.path == "/index") {
        return "background--index";
      } else {
        return "background--app";
      }
    }
  }
};
</script> 
<style lang="less">
@import url("./styles/reset.less");
@import url("./styles/public.less");
@import url("./styles/index.less");
@import url("./styles/animate.less");
@import url("./styles/element.less");
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: @i-background;
  min-width: @min-width;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
.background--index {
  background-image: url("./assets/index-b1.jpg");
}
.background--app {
  background-image: url("./assets/index-b2.png");
}

.head {
}
.view {
  position: absolute;
  left: @margin;
  right: @margin;
  top: 90px;
  bottom: @margin;
  color: #fff;
}
</style>
