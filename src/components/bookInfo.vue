<template>
  <div>
    <div class="bookInfoContent" >
        <div class="imgInfo">
          <img src="../assets/image/book.png">
        </div>
          <mt-cell title="标题文字">
            <img src="../assets/image/savenor.png">
            <span>收藏</span>
            </mt-cell>

          <ul class ="bookInfoMoney">
            <li>
            ￥7.9
            <span>原价：<s>22</s></span>
            <span>其他平台：12</span>
            <span>节省：12</span>
            </li>
          </ul>
          <ul class="comment">
             <li> <p>住：把解放碑哈咖啡坚实的</p></li>
          </ul>
          <ul class="bookInfo">
             <li> ISBN:123456567</li>
             <li> 作者:同济大学</li>
             <li> 出版社:高等教育出版社</li>
          </ul>
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
        <ul class="someComment">
            <li>
            还书截止日：阿斯蒂芬规划局
            </li>
            <li>
            还书截止日：阿斯蒂芬规划局
            </li>
        </ul>
    </div>
    <div class="actionButton">
            <button>我要租书<span>可得：7.9</span></button>
            <button>我要租书<span>可得：7.9</span></button>
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
