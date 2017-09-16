<template>
<div class="shoppingCartContent">

   <div>
  <div class="scNoAddContent">
    <div class="header">
       <ul>
        <span v-if="selecteAll" v-on:click="cancleSlectedAll">
           <img class ="selecteAll"src="../assets/image/selected.png"/>
        </span>
        <span v-else v-on:click="selectedAll">
           <img class ="selecteAll"src="../assets/image/secnor.png"/>
        </span>
        全选
        <span v-on:click="deleteAll">清空购物车</span>
      </ul>
  </div>
    <div  v-for="(site,index) in contentList">
      <div>
        <span v-if="site.selected" v-on:click="cancleSlected(site,index)">
           <img class ="checkBox"src="../assets/image/selected.png"/>
        </span>
        <span v-else v-on:click="selected(site,index)">
           <img class ="checkBox"src="../assets/image/secnor.png"/>
        </span>
      </div>
      <div class="goodsImg">
        <img src="../assets/image/book.png">
      </div>
      <ul class="goodsInfo">
        <li class="name">马克思主义</li>
        <li class="selectedType">类型：租赁</li>
        <li class="cost">$7.9<span>e比</span></li>
        <ul class="btn-numbox">
              <li><span class="number">数量:</span></li>
              <li>
                  <ul class="count">
                      <li><span v-on:click="minus(site,index)" class="num-jian">
                      -</span></li>
                      <li><input type="text" class="input-num"
                      v-model="site.count" /></li>
                      <li><span v-on:click="add(site,index)" class="num-jia">+</span></li>
                  </ul>
              </li>
  　　　  </ul>
      </ul>
    </div>
   </div>
    <div class="sendOeder">
      <ul>
        <li><button >提交订单</button></li>
        <li><p>实付</p><p>实付</p></li>
        </ul>
    </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'payMethod',
  data () {
    return {
     selecteAll:false,
     contentList:[
        {selected:false,count:0},
        {selected:false,count:0}
     ]

    }
  },
  methods:{
    minus(site,index){
        if(this.contentList[index].count>0){
          this.count=parseInt(this.count)-1;
        }
     },
     add(site,index){
       this.contentList[index].count=parseInt(this.contentList[index].count)+1;
     },
     cancleSlectedAll(){
        this.selecteAll = false;
        this.contentList.forEach(function(arr){
            arr.selected=false;
        });
     },
     selectedAll(){
        this.selecteAll = true;
        this.contentList.forEach(function(arr){
            arr.selected=true;
        });
     },
     cancleSlected(site,index){
          this.contentList[index].selected = false;
          this.selecteAll = false;

     },
     selected(site,index){
          this.contentList[index].selected = true;
          var notSelectedAll = false;
          this.contentList.forEach((e)=>{
              if(!e.selected) notSelectedAll = true;
          });
          if(!notSelectedAll){
            this.selecteAll = false;
          }
     },
     deleteAll(){
          this.contentList.splice(0);
     }

  }
}
</script>

<style scoped>
 @import '../assets/style/main.css';
 @import '../assets/style/info.css';
 .payButton{margin-top:20px;}
</style>
