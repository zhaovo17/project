<template>
  <div>
    <div class="btns">
      <router-link to="/about/donate/wechat">微信捐赠</router-link>
      <router-link to="/about/donate/alipay">支付宝捐赠</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.btns a{
    display: inline-block;
    padding: 20px;
    color: #000;
    font-size: 16px;
    text-decoration: none;
}
</style>