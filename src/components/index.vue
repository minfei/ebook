<template>
  <div class="home">
  <yd-slider autoplay="3000">
    <yd-slider-item v-for="item in bookBanner">
      <a href="http://www.ydcss.com">
        <img :src="'http://' + item.icon">
      </a>
    </yd-slider-item>
  </yd-slider>
  <article class="nav">
    <p><input type="text" placeholder="请输入书籍的ISBN,书名，或作者"></p>
    <p>
      <a href=""><img src="../assets/image/jrkt.png" alt="">我要E币</a>
      <a href=""><img src="../assets/image/rdcp.png" alt="">全部分类</a>
    </p>
  </article>
  <article class="bookClass">
    <h2>热门分类</h2>
    <yd-tab>
      <yd-tab-panel label="大一" active>
        <ul>
          <li v-for="item in hotBook"><a href=""><img :src="'http://' + item.icon" alt=""></a></li>
        </ul>
      </yd-tab-panel>
      <yd-tab-panel label="大二" >222222设置初始激活项</yd-tab-panel>
      <yd-tab-panel label="大三">333333</yd-tab-panel>
      <yd-tab-panel label="大四">444444</yd-tab-panel>
    </yd-tab>
  </article>
  <yd-tabbar style="position: fixed;bottom: 0;">
    <yd-tabbar-item title="首页" link="" >
      <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="购物车" link="" >
      <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="我的" link="" active>
      <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
  </div>
</template>

<style lang="sass" scoped>
  .home
    .bookClass
      background: #fff
      padding: 0.3rem
      h2
        font: bold 0.34rem/0.8rem '宋体'
        text-align: center
      ul
        display: flex
        flex-direction: row
        li
          width: 3.3rem
          margin-top: 0.2rem
          &:nth-of-type(even)
            margin: 0.3rem
          a
            display: flex
            flex: 1
            img
              width: 100%
    .nav
      padding: 0.1rem 0.3rem 0.3rem
      display: flex
      flex-direction: column
      p
        display: flex
        margin-top: 0.2rem
        input
          font: 0.24rem/0.8rem '宋体'
          flex: 1
          text-align: center
          background: #fff
          border-radius: 5px
          border: 0
          outline: none
        a
          width: 3.3rem
          font: bold 0.3rem/0.8rem '宋体'
          background: #fff
          border-radius: 5px
          display: flex
          justify-content: center
          align-items: center
          img
            width: 0.54rem
            height: 0.54rem
          &:last-child
            margin-left: 0.3rem

</style>

<script type="text/babel">
  import http from '../utils/axios'
  import api from '../utils/api'
  import axios from 'axios'
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
