<template>
    <div class="about">
      <div class="menu">
          <router-link tag="li" class="nav-link" to="/about/news">
            <a>最新新闻</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/about/contact">
            <a>联系方式</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/about/guide">
            <a>文档指导</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/about/donate">
            <a>捐赠方式</a>
          </router-link>
      </div>
      <div class="">
        <!--导航对应的内容-->
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
.about{
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
}
.menu{
    margin-right: 50px;
}
.menu li{
    margin: 10px;
    list-style: none;
}
.menu li a{
    text-decoration: none;
    color: gray;
    font-size: 17px;
    padding: 10px 10px;
    display: inline-block;
    background-color: skyblue;
}
</style>