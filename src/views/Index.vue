<template>
  <!-- <s-alert></s-alert> -->
  <div class="full">
    <div class="s_title _index_title">
      <s-time></s-time>
    </div>
    <div class="_index">
      <div class="_index--left _index--item flex-1">
        <!-- alert -->
        <s-box title="Alert">
          <s-alert slot="main">
          </s-alert>
        </s-box>
        <!-- alert list -->
        <s-box title="Alert List">
          <s-scroll slot="main" class="s-box-full">
            <s-alist slot="main">
            </s-alist>
          </s-scroll>
        </s-box>
        <s-box title="Top5 Alerts">
          <s-top slot="main">
          </s-top>
        </s-box>
      </div>
      <div class="_index--center _index--item flex-2">
        <div class="s-box _index-topo">
          <word-map></word-map>
        </div>
        <div class="s-box _index-bar"> </div>
      </div>
      <div class="_index--right _index--item flex-1">
        <div class="s-box">
          <s-line></s-line>
        </div>
        <div class="s-box"> </div>
        <div class="s-box"> </div>
      </div>
    </div>
  </div>
</template>

<script >
import alert from "@/components/Index/alert.vue";
import alertList from "@/components/Index/alertList.vue";
import top from "@/components/Index/top.vue";
import scroll from "@/components/public/scroll.vue";
import box from "@/components/public/box.vue";
import map from "@/components/Index/map.vue";
import time from "@/components/public/time.vue";
import line from "@/components/charts/line.vue";
export default {
  components: {
    "s-alert": alert,
    "s-box": box,
    "s-scroll": scroll,
    "s-alist": alertList,
    "s-top": top,
    "s-time": time,
    "word-map": map,
    "s-line": line,
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
._index {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 100%;
}
._index--center {
  padding: 0 10px;
}
._index_title {
  margin-top: 5px;
}
.index--box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
._index--left,
._index--right {
  .index--box;
  > div {
    height: 31.8%;
  }
}
._index--center {
  .index--box;
  ._index-topo {
    position: relative;
    height: 65.6%;
  }
  ._index-bar {
    height: 31.8%;
  }
}
._index--item {
  position: relative;
  height: 100%;
}
</style>
