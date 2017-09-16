<template>
	<div class="allSortContent">
		<ul>
			<li class="back">
				<img src="../assets/image/backico.png">
			</li>
			<li class="search">
				<img src="../assets/image/serico.png">
				<input type="text"placeholder="请输入书籍的ISBN、书名或作者">
			</li>
		</ul>
		<ul class="sortContent">
		<div class="sortItem">
			 <li  v-for="(site,index) in leftMenu">
					<div v-bind:class="[site.show ? show:hidden]"
					 v-on:click="switchPanel(site,index)">
					{{site.name}}
					</div>
				</li>
		</div>
		<li class="content">
			<div>
				<img src="../assets/image/book.png">
				<p>互联网</p>
			</div>

		</li>

		</ul>
	</div>
</template>
<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      value:'',
      show:'show',
      hidden:'hidden',
      lastIndex:0,
      leftMenu:[
      	{name:'公务员',show:true},
      	{name:'教师资格证',show:false}
      ]
    };
  },
  methods:{
  	switchPanel(currentSite,index){
  		var  lastSite =this.leftMenu[this.lastIndex];
  		lastSite.show=false;
  		currentSite.show = true;
  		this.leftMenu.splice(this.lastIndex,1,lastSite);
  		this.leftMenu.splice(index,1,currentSite);
  		this.lastIndex = index;
  	}
  }
};
</script>
<style scoped>
    @import '../assets/style/main.css';

</style>
