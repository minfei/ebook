<template>
  <div class="page-navbar studyBody">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">我的收藏</mt-tab-item>
      <mt-tab-item id="2">我的捐书</mt-tab-item>
    </mt-navbar>


    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="ListContent">
        	<div>
        	<img slot="icon" src="../assets/image/book.png" width="45" height="60">
        	 </div>
        	<div class="itemContent">
        		<p>时间见识</p>
        		<p>￥11.9（e币）</p>
        	</div>
        	<div class="cancleCollect">
        		<button >取消收藏</button>
        	</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="ListContent">
        	<div>
        	<img slot="icon" src="../assets/image/book.png" width="45" height="60">
              </div>
        	<div class="itemContent">
        		<p>时间见识</p>
        		<p>捐赠时间</p>
        	</div>
        	<div class="getMoney">
        		获得7e币
        	</div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1'
    };
  }
};
</script>
<style scoped>
    @import '../assets/style/main.css';

</style>
