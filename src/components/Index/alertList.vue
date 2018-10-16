<template>
    <ul class="_index-alist ">
        <li v-for="item in 20" :key="item">
            <span class="text-hidden flex-3">2018-10-16 17:24:17</span>
            <span class="text-hidden flex-3">Illegal network access</span>
            <span class="text-hidden flex-2 text-center">R&D Dept.4</span>
        </li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="less">
._index-alist{
    >li{
        display:flex;
        font-size:13px;
        line-height:20px;
        padding:0 5px;
    }
    >li:nth-child(odd){
        background:#2c3848a3
    }
}
</style>
