<template>
<div>
  <div class="commodityInfo" >
      <div class="imgInfo">
        <img src="../assets/image/book.png">
      </div>
        <mt-cell title="标题文字">
          <img src="../assets/image/savenor.png">
          <span>收藏</span>
          </mt-cell>

        <mt-cell class ="money"title="￥7.9"></mt-cell>
        <mt-cell title="简介"></mt-cell>

         <ul class="btn-numbox">
            <li><span class="number">数量:</span></li>
            <li>
                <ul class="count">
                    <li><span v-on:click="minus()" class="num-jian">-</span></li>
                    <li><input type="text" class="input-num"
                    v-model="count" /></li>
                    <li><span v-on:click="add()" class="num-jia">+</span></li>
                </ul>
            </li>
　　　  </ul>
    </div>
    <div class="actionButton">
            <button>私人定制</button>
            <button>加入购物车</button>
    </div>

</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      count:0
    }
  },
  mounted () {
   },
  methods:{
      minus(){
        if(this.count>0){
          this.count=parseInt(this.count)-1;
        }
     },
     add(){
       this.count=parseInt(this.count)+1;
     }
  }
}

</script>
<style scoped>
    @import '../assets/style/info.css';

</style>
