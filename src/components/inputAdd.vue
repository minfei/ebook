<template>
<div class="main">

  </mt-header>
  <div class="content">
    <mt-field label="联系人" placeholder="" v-model="List.name">
    </mt-field>
	<mt-field label="手机号码" placeholder="" type="tel" v-model="List.phone">
	</mt-field>
	<mt-field label="请选择学校" placeholder=""  v-model="List.university">
	</mt-field>
	<mt-field label="请选择宿舍" placeholder="" type="tel" 
	v-model="List.dormBuilding"></mt-field>
	<mt-field label="请选择室号" placeholder="" type="url"
	 v-model="List.roomNumber"></mt-field>
	<mt-button size="large" class="onSave" v-on:click="onSave()">
		保存
	</mt-button>
	<mt-button size="large"  class="cancle" v-on:click="cancle">取消</mt-button>
</div>
</div>
</template>
<script>


export default {
 	name: '',
 	components:{

 	},
 	mounted(){
 		this.anaysisi();
 	},
 	data (){
 	return{
 		action:'add',
 		List:{
 			name:'',
	 		phone:'',
	 		university:'',
	 		dormBuilding:'',
	 		roomNumber:''
 		}
 	}
 		
 	},
 	methods:{
 		anaysisi(){
	 		if(window.localStorage){
	 			var obj = JSON.parse(window.localStorage.getItem('info') || '[]');
	 			if(obj){
	 				this.List=obj;
	 				window.localStorage.removeItem('info');
	 				this.action="ModifyInfo";
 				}else{
 					this.action="add";
 				}
	 		}
	 	},
	 	onSave(){
	 		var item = this.List;
		 	var obj = {
	          name : item.name,
	          phone:item.phone,
	          university:item.university,
	          dormBuilding:item.dormBuilding,
	          roomNumber :item.roomNumber,
	        };
	        window.localStorage.clear();
	        if(this.action=="add"){
	        	window.localStorage.setItem('add', JSON.stringify(obj));
	        }else{
	        	window.localStorage.setItem('ModifyInfo', JSON.stringify(obj));
	        }
	 		
	 		this.$router.push({path: '/addList', replace: true})
	 	},
	 	cancle () {
	 		this.$router.push({path: '/addList'})
	 	}
 	},
 	
}
</script>
<style scoped>
    @import '../assets/style/main.css';

</style>