<template>
    <div id="globalArea" class="full">

    </div>
</template>

<script>
import * as THREE from "three";
import { Controller } from "giojs";
import utils from "./map.ts";
export default {
  mounted() {
    var container = document.getElementById("globalArea");
    var controller = new Controller(container);
    controller.addData(utils.data);
    controller.setInitCountry("CN");
    controller.configure({
      color: {
        background: "#020610"
      }
    });
    controller.init();
  }
};
</script>

<style lang="less" scoped>
#globalArea {
}
</style>

