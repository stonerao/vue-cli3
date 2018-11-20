<template>
    <div class="case-b relative">
        <div class="f-f-c case-head">
            <i class="iconfont" :class="icon" v-if="icon"></i>
            <span v-html="title" class=" case-title"></span>
        </div>
        <div class="case-box">
            <slot name="main"></slot> 
        </div>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
@head-height: 50px;
@height-bottom:10px; 
.case-head {
  display: flex;
  vertical-align: middle;
  line-height: @head-height;
  height: @head-height;
  margin-left: 15px;
  margin-bottom:10px;
  i {
    font-size: 28px;
    margin-right: 5px;
  }
  .case-title {
    font-size: 17px;
  }
}
.case-box {
    position: absolute;
    top:@head-height + @height-bottom;
    left:0;
    right:0;
    bottom:0;
}
</style>

