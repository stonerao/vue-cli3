<template>
  <!-- <s-alert></s-alert> -->
  <div class="full">
    <div class="s_title _index_title">
      2018年10月16日 15:46:42
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
        <div class="s-box _index-topo"> </div>
        <div class="s-box _index-bar"> </div>
      </div>
      <div class="_index--right _index--item flex-1">
        <div class="s-box"> </div>
        <div class="s-box"> </div>
        <div class="s-box"> </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import alert from "@/components/Index/alert.vue";
import alertList from "@/components/Index/alertList.vue";
import top from "@/components/Index/top.vue";
import scroll from "@/components/public/scroll.vue";
import box from "@/components/public/box.vue";
export default {
  components: {
    "s-alert": alert,
    "s-box": box,
    "s-scroll": scroll,
    "s-alist": alertList,
    "s-top": top
  },
  mounted() {}
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
