<template>
  <div class="s-box">
    <div class="s--btitle">
      <i class="el-icon-message"></i>
      <span>{{title}}</span>
    </div>
    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String
  }
};
</script>

<style lang="less" scoped>
.s-box {
  position: relative;
}
</style>

