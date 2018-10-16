<template>
    <div :id="id">
        <slot name="main"></slot>
    </div>
</template>

<script>
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
export default {
  data() {
    return {
      scrollEvent: null
    };
  },
  computed: {
    id() {
      /* ID */
      return "id" + (Date.now() + parseInt(Math.random() * 1000));
    }
  },
  destroyed() {
    /* 离开后删除 */ 
    this.scrollEvent.destroy();
  },
  mounted() { 
    this.scrollEvent = new PerfectScrollbar(`#${this.id}`, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 10
    });
  }
};
</script>

<style>
</style>
