<template>
<div class="main">
  <div class="content">
  <ul>
    <li v-for="(site,index) in contentList">
    <div v-on:click="selectedAdd(site,index)">
       <mt-cell v-bind:title = "site.name+' '+site.phone" 
       v-bind:label="site.university+ ' '+site.dormBuilding+ ' '+
       site.roomNumber" >
       <div v-on:click.stop="addItem(site,index)">
       编辑
       </div>
       </mt-cell>
       </div>
     </li>
    </ul>
  </div>
  <mt-tabbar class="buttom">
      <mt-button class="activeButton" v-on:click="newAdd">新增地址</mt-button>
  </mt-tabbar>
</div>
</template>
<script>
export default {
  name: 'Login',
  data (){
   return{
   contentList:[
        {
          name:'张扬',
          phone:'18370893433',
          university:'上海交大',
          dormBuilding:'5号楼',
          roomNumber:'3号室'
        }
     ]
     
   }
  
  },
  mounted(){
    if(window.localStorage.getItem('ModifyInfo')){
      this.contentList.splice(0,1,JSON.parse(window.localStorage.getItem('ModifyInfo')));
    }else if(window.localStorage.getItem('add')){
      this.contentList.push(JSON.parse(window.localStorage.getItem('add')));
    }
    window.localStorage.clear();
  },
  methods : {
    addItem(item,index){
    if(window.localStorage){
        var obj = {
          name : item.name,
          phone:item.phone,
          university:item.university,
          dormBuilding:item.dormBuilding,
          roomNumber :item.roomNumber,
        };
        window.localStorage.setItem('info', JSON.stringify(obj))
       this.$router.push({path: '/inputAdd'});
      }
    },
    newAdd(){
      window.localStorage.clear();
      this.$router.push({path: '/inputAdd'});
    },
    selectedAdd(site){
          if(window.localStorage){
            var obj = {
              name : site.name,
              phone:site.phone,
              university:site.university,
              dormBuilding:site.dormBuilding,
              roomNumber :site.roomNumber,
            };
            window.localStorage.setItem('addInfo', JSON.stringify(obj))
            this.$router.push({path: '/'});
          }
    }
  },
  
}

</script>
<style scoped>
.main{width:100%;height:100%;padding:0;margin:0;}
.main .buttom{height:60px;}
.main .content button{background:#32ba7c;color:#ffffff;}
.main .buttom button{width:90%;margin:9px auto;background:#32ba7c;color:#fff;}
</style>