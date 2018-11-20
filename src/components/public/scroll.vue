<template>
    <div :id="radomId" :class="className">
        <slot name="main"></slot>
    </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
  props:{
      className:{
          default:"relative"
      },
      id:String
  },
  data() {
    return {
      scrollEvent: null
    }
  },
  mounted() {
    this.scrollEvent = new PerfectScrollbar(`#${this.radomId}`, {
      wheelSpeed: 1,
      wheelPropagation: true,
      minScrollbarLength: 20
    })  
    window.addEventListener('resize',this.resize)
  },
  computed: {
    radomId() { 
      if(this.id){
        return this.id
      }else{
        return 'SC' + (Date.now() + parseInt(Math.random() * 1000))
      }
    }
  },
  destroyed() {
    this.scrollEvent.destroy()
    window.removeEventListener('resize',this.resize)
  },
  methods: {
    resize(){
      this.scrollEvent.update()
    },
    async update(state) {
      /* 传参，如果为true 更新滚动条 */
      await this.scrollEvent.update()
      return true
    }
  }
}
</script>
<style>
</style>
