<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view/>
  </div>
</template>

<script>
import MenuVue from './components/Menu.vue';
export default {
  name: 'App',
  components:{
    "app-menu":MenuVue,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
