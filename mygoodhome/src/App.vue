<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'

import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import globalClasses from'./global-style.scss'

//Rooter Part
const routes = [
  { path: '/', component: HomePage },
  //{ path: '/join', component: Join },
];
const router = new VueRouter({routes});

export default {
  name: 'App',
  router,
  components: { HomePage, /*Join*/ },
  data (){
        return {
            
        }
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .navbar{
    height: 3.5em;
    padding : 0.5em 2em;
    .navbar-brand {
      margin: 0px auto;
    }
    .navbar-nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row !important;
      width: 20%;
      .btn{
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
      }
      .nav-item + .nav-item {
        margin-left: 2em;
      }  
    }
  }
}
</style>

