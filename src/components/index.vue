<template>
  <div class="home">
  <yd-slider autoplay="3000">
    <yd-slider-item>
      <a href="http://www.ydcss.com">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      </a>
    </yd-slider-item>
    <yd-slider-item>
      <a href="http://www.ydcss.com">
        <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </a>
    </yd-slider-item>
    <yd-slider-item>
      <a href="http://www.ydcss.com">
        <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
      </a>
    </yd-slider-item>
  </yd-slider>
  <article class="nav">
    im

  </article>
  </div>
</template>

<style scoped="scss">
  .home
    .nav
      padding: 0.3rem 0.2rem


</style>

<script type="text/babel">
  import axios from '../utils/axios'
  import api from '../utils/api'
  export default {
    name: 'hello1',
    data() {
      return {
        datetime1: '05:21',
      }
    },
    created() {

    },
    mounted() {
      this.fetchData()
    },
    methods: {
      fetchData: async function () {
        let params = {
          add:'1'
        }
        const res = await axios.get(api.lus, params)
//        if (res.data.success) {
//          //alert('请求成功')
//        }
      }
    }
  }
</script>
