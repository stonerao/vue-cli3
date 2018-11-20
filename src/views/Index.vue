<template>
  <section class="full">
    <!-- <Title/> -->
    <y-title title=""></y-title>
    <div class="_index full-c">
      <div class="flex-1 _index-item">
        <y-case class="flex-1" icon="icon-header-biaoshilei_yuanchengpeizhi" title="攻击详情">
          <div slot="main">

          </div>
        </y-case>

        <y-case class="flex-1" style="margin: 20px 0">
          <div slot="main">

          </div>
        </y-case>
        <y-case class="flex-1">
          <div slot="main">

          </div>
        </y-case>
      </div>
      <div class="flex-2 _index-item" style="margin:0 20px;">
        <div class="flex-2">
          2
        </div>
        <div class="flex-1">
          1
        </div>
      </div>
      <div class="flex-1 _index-item">
        <y-case class="flex-1">
          <div slot="main">

          </div>
        </y-case>

        <y-case class="flex-1" style="margin: 20px 0">
          <div slot="main">

          </div>
        </y-case>
        <y-case class="flex-1">
          <div slot="main">

          </div>
        </y-case>
      </div>
    </div>

  </section>
</template>

<script> 
export default {
  components: { 
  }, 
  mounted() {}
};
</script>

<style lang="less">
.box {
}
._index {
  display: flex;
  justify-content: space-between;
}
._index-item {
  position: 100%;
  position: relative;
  flex-direction: column;
  display: flex;
}
</style>

