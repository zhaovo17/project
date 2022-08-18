<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from './components/header.vue'
export default {
  name: 'App',
  components:{Header}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
