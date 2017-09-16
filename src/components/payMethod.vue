<template>
<div class="payMethosContent">
    <div class="title">请选择支付方式</div>
    <mt-radio
    align="right"
    v-model="value"
    :options="optionList">
  </mt-radio>
    <mt-button size="large" class="payButton" v-on:click="payOnSure">
     确认付款
    </mt-button>
</div>
</template>

<script>
export default {
  name: 'payMethod',
  data () {
    return {
     value:[],  
     optionList:[{
        label: '直接购买',
        value: '1'
      },
      {
        label: '仅预定（只需支付服务费￥）',
        value: '2'
      }]
    }
  },
  methods:{
    payOnSure(){
      alert(this.value);
    }
  }
}
</script>

<style scoped>
 @import '../assets/style/main.css';
 .payButton{margin-top:20px;}
</style>
