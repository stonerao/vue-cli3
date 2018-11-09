<template>
  <div class="_index-alert">
    <div class="_index--aler-img flex-2">
      <img :src="muster['attack1']" alt="">
    </div>
    <div class="_index--aler-items flex-3">
      <p><span>源IP：</span>160.142.23.1</p>
      <p><span>地区：</span>美国</p>
      <p><span>日期：</span>1970-01-01</p>
      <p><span>时间：</span>08:00:00</p>
      <p><span>类型：</span>服务信息探测</p>
      <p><span>编号：</span>NAS-010200</p>
    </div>
  </div>
</template>

<script lang="ts">
import { socket } from "@/utils/config.ts";
import { Sockets } from "./index";
import imgMuster from "./img";
export default {
  data() {
    return {
      muster: imgMuster
    };
  },
  mounted() {
    let ket = Sockets({
      area: socket.alert,
      message: "1",
      data: {},
      event: function() {}
    });
  }
};
</script>


<style lang="less" scoped>
._index-alert {
  display: flex;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  ._index--aler-img {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;
    img {
      width: 90%;
      vertical-align: middle;
    }
  }
  ._index--aler-items {
    line-height: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    > p {
      flex: 1;
      font-size: 14px;
    }
  }
}
</style>

