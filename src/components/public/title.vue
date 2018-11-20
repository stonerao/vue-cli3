<template>
  <div class="_title">
    <img :src="IMG" class="_title--l _title--img not-text" />
    <div class="_title-text i-f-c ">
      Vulnerability Managememnt
    </div>
    <img :src="IMG" class="_title--r _title--img not-text" />
  </div>
</template>

<script>
import TitleImg from '../../assets/public/title.png'
export default { 
  data() {
    return {
      IMG: TitleImg
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
._title {
  height: 42px;
  width: 94%;
  padding: 0 3%;
  display: flex;
  justify-content: center;
}
._title-text {
  min-width: 420px;
  padding: 0 10px;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  font-weight: 400;
}
._title--l {
  transform: rotateY(180deg);
}
._title--r {
}
._title--img {
  flex: 1;
  height: 100%;
}
</style>
