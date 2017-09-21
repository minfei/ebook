<template>
  <div class="diary">
  <article class="item">
    <div class="tit">
      <img src="../../assets/image/ava60.png" alt="">
      <div class="con">
        <h3>小米</h3>
        <p>每一次都是心灵的碰撞</p>
      </div>
    </div>
    <div class="arc">
      <p class="tit">穿越高度的旅行是一种极致的享受</p>
      <p class="time">13:14 星期日</p>
      <p class="dis">今天去了上海科技馆，穿越高度的旅行是一种极致的享受</p>
      <div class="img">
        <img src="../../assets/image/aertcleimg1.png" alt="">
        <img src="../../assets/image/aertcleimg2.png" alt="">
      </div>
      <p class="bot">
        <a href="javascript:;" class="love">255</a>
        <a href="javascript:;" class="comment">255</a>
      </p>
    </div>
  </article>
  <article class="item">
      <div class="tit">
        <img src="../../assets/image/ava60.png" alt="">
        <div class="con">
          <h3>小米</h3>
          <p>每一次都是心灵的碰撞</p>
        </div>
      </div>
      <div class="arc">
        <p class="tit">穿越高度的旅行是一种极致的享受</p>
        <p class="time">13:14 星期日</p>
        <p class="dis">今天去了上海科技馆，穿越高度的旅行是一种极致的享受</p>
        <div class="img">
          <img src="../../assets/image/aertcleimg1.png" alt="">
          <img src="../../assets/image/aertcleimg2.png" alt="">
        </div>
        <p class="bot">
          <a href="javascript:;" class="love">255</a>
          <a href="javascript:;" class="comment">255</a>
        </p>
      </div>
    </article>
  <yd-tabbar style="position: fixed;bottom: 0;">
    <yd-tabbar-item title="首页" link="" >
      <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="购物车" link="" >
      <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="日记" link=""  active>
      <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="我的" link="">
      <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
  </div>
</template>

<style lang="sass" scoped>
  .diary
    .item
      background: #fff
      padding: 0.3rem
      margin-bottom: 0.3rem
      .tit
        display: flex
        flex-direction: row
        img
          width: 1rem
          height: 1rem
          border-radius: 0.6rem
        .con
          flex: 1
          padding-left: 0.2rem
          h3
            font: 0.34rem/0.5rem '宋体'
            color: #666
          p
            font: 0.14rem/0.5rem '宋体'
            color: #999
      .arc
        background: url("../../assets/image/bookbg.png") no-repeat
        background-size: 6.35rem 5.62rem
        margin-left: 0.8rem
        padding: 0.5rem 0.5rem
        height: 5.52rem
        width: 6.35rem
        .tit
          font: 0.34rem/0.5rem '宋体'
          color: #666
        .time
          font: 0.14rem/0.5rem '宋体'
          color: #999
        .dis
          font: 0.14rem/0.3rem '宋体'
          color: #666
        .img
          margin-top: 0.2rem
          display: flex
          flex-direction: row
          img
            width: 2.2rem
            height: 1.6rem
            &:last-child
              margin-left: 0.2rem
        .bot
          a
            color: #999999
            font: 0.14rem/0.8rem '宋体'
            padding-left: 0.3rem
          .love
            background: url("../../assets/image/likeico.png") no-repeat left center
            background-size: 0.26rem 0.23rem
          .comment
            background: url("../../assets/image/commentnum.png") no-repeat left center
            background-size: 0.24rem 0.23rem
            margin-left: 0.3rem

</style>

<script type="text/babel">
  import http from '../../utils/axios'
  import api from '../../utils/api'
  //import axios from 'axios'
  export default {
    name: 'hello1',
    data() {
      return {
        datetime1: '05:21',
        hotBook: '',
        bookBanner: '',
      }
    },
    created() {
      document.title = '四年日记'
    },
    mounted() {
      this.gitBanner();
      this.gitBook()
    },
    methods: {
      gitBanner: async function () {
        const res = await http.get(api.banner)
        if (res.status == 200) {
          this.bookBanner = res.data.data
        }
      },
      gitBook: async function () {
        let params = {
          grade:'one'
        }
        const res = await http.get(api.allBook, params)
        if (res.status == 200) {
          this.hotBook = res.data.data
        }
      }
    }
  }
</script>
