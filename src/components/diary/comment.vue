<template>
  <div class="comment">
    <textarea placeholder="写下你的心情日记，或者他想和朋友交流的话题，1000字以内">

    </textarea>
    <p class="commit"><a href="javascript:;">提交</a></p>
  </div>
</template>

<style lang="sass" scoped>
  .comment
    textarea
      width: 97%
      height: 4.5rem
      padding: 3%
      font: 0.3rem/0.5rem '宋体'
      border: 0
    p
      display: flex
      justify-content: center
      align-items: center
      margin-top: 0.4rem
      a
        height: 0.8rem
        width: 6.7rem
        justify-content: center
        align-items: center
        color: #fff
        display: flex
        background: #32ba7c
        border-radius: 2px
        font: 0.3rem/0.8rem '宋体'

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
      document.title = '日记详情'
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
