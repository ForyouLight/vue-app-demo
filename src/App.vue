<template>
  <div id="app">
    <a-menu
    mode="horizontal">
      <a-menu-item key="mainMenu">首页</a-menu-item>
      <a-sub-menu title="子菜单">
        <a-menu-item>子菜单项</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
