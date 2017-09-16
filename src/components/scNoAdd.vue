<template>
<div>
	<div class="scNoAddContent">
		<div>
			<span v-if="displayNew">
				<router-link to="addList">
					<mt-button class="selectAdd" size="large">
				     	选择收货地址
				    </mt-button>
			    </router-link>
			</span>
			<span v-else>
			    <div>
			       <mt-cell v-bind:title = "address.name+' '+address.phone"
			       v-bind:label="address.university+ ' '+address.dormBuilding+ ' '+
			       address.roomNumber" >
				       <div class="selectAdd" >
				       		<router-link to="addList">
				       			<img src="../assets/image/ebterarrow.png"/>
				       		</router-link>
				       </div>
			       </mt-cell>
			      </div>
			</span>
		</div>
		<div>
			<div class="goodsImg">
				<img src="../assets/image/book.png">
			</div>
			<ul class="goodsInfo">
				<li class="name">马克思主义<span>数量：1</span></li>
				<li class="money">￥7.9<span>e比</span></li>
				<li class="cost"><span>折旧费:</span>$2.0<span>e比</span></li>
				<li class="totalInfo"><span>小计:</span>e比</li>
			</ul>
		</div>
		<div>
			<div class="goodsImg">
				<img src="../assets/image/book.png">
			</div>
			<ul class="goodsInfo">
				<li class="name">马克思主义<span>数量：1</span></li>
				<li class="money">￥7.9<span>e比</span></li>
				<li class="cost"><span>折旧费:</span>$2.0<span>e比</span></li>
				<li class="totalInfo"><span>小计:</span>e比</li>
			</ul>
		</div>


		<div>
			<ul class="totalPayInfo">
				<li>租金:<s>4.0</s></li>
				<li>折旧费:<span>4.0</span></li>
				<li><span>押金:90</span></li>
				<li><span>合计：</span><span>14.0</span></li>
			</ul>
		</div>
		<div>
			<ul class="useEB">
				<li>使用E币<input type="text" v-on:input="useEb"
				v-model="eBNumber"/>个 - {{eBToMoney}}</li>
			</ul>
			<ul class="note">
				<li>备注</li>
			</ul>
		</div>
		<div>
			<mt-cell title="配送方式" class="deliveryType">
				上门配送<img src="../assets/image/ebterarrow.png"/>
			</mt-cell>
		</div>
		<div class="leaveMessage">
			<mt-field label="给我留言" placeholder="输入您的留言内容"
			type="text" >
			</mt-field>
		</div>
	</div>

		<div class="sendOeder">
			<ul>
				<li><button >提交订单</button></li>
				<li><p>实付</p><p>实付</p></li>
		    </ul>
		</div>
</div>
</template>
<script>
export default {
  name: 'scNoAddContent',
  mounted(){
  		this.address = JSON.parse(window.localStorage.getItem('addInfo'));
  		if(this.address) this.displayNew = false;
  },
  data() {
    return {
    	eBNumber:0,
    	eBToMoney:0,
    	displayNew:true,
    	address: {
          name:'',
          phone:'',
          university:'',
          dormBuilding:'',
          roomNumber:''
        }
    };
  },
  methods:{
  	useEb(){
  		 this.eBToMoney=parseInt(this.eBNumber)/10;
  	}
  }
};
</script>
<style  lang="sass" scoped>
    @import '../assets/style/main.css'

</style>
