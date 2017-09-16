<template>
  <div class="my">
    <article>
      <div class="top arrow">
        <img src="../assets/image/ava72.png" alt="">
        <div class="right">
          <p>用户名: 爱哭的小猫</p>
          <p>电话：<a href="">绑定订货</a></a></p>
        </div>
      </div>
    </article>
    <yd-cell-group>
      <yd-cell-item arrow href="" type="link">
        <yd-icon slot="icon" name="shopcart-outline" size=".52rem"></yd-icon>
        <span slot="left">购物车</span>
      </yd-cell-item>
      <yd-cell-item arrow href="" type="link">
        <yd-icon slot="icon" name="like-outline" size=".52rem"></yd-icon>
        <span slot="left">我的书房</span>
      </yd-cell-item>
      <yd-cell-item arrow href="" type="link">
        <yd-icon slot="icon" name="order" size=".52rem"></yd-icon>
        <span slot="left">我的订单</span>
      </yd-cell-item>
      <yd-cell-item arrow href="" type="link">
        <yd-icon slot="icon" name="location" size=".52rem"></yd-icon>
        <span slot="left">收货地址</span>
      </yd-cell-item>
      <yd-cell-item arrow href="" type="link">
        <yd-icon slot="icon" name="like-outline" size=".52rem"></yd-icon>
        <span slot="left">使用指南</span>
      </yd-cell-item>
    </yd-cell-group>


  </div>
</template>



<style lang="sass">
  .my
    yd-cell-group
      padding: 0.2rem 0
    article
      margin-bottom: 0.3rem
      background: #fff
      .top
        padding: 0.4rem
        display: flex
        font-family: YDUI-INLAY
        font-size: .34rem
        color: #c9c9c9
        content: "\E608"
        box-sizing: border-box
        outline: none
        margin-left: .05rem
        margin-right: -.08rem
        img
          border-radius: 2rem
          height: 1.5rem
          height: 1.5rem
        .right
          padding-left: 0.3rem
          p
            font: .3rem/.75rem '宋体'
            color: #999
            a
              border: 1px solid #333
              display: inline-block
              padding: 0 0.2rem
              border-radius: 3px
</style>
