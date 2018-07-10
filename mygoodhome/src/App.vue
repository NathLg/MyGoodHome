<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  @import "assets/style.css";
</style>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router';
import AdminHome from './components/AdminHome.vue';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import globalClasses from'./global-style.scss'

import Header from './components/Header.vue';
import Inscription from './components/Inscription';
import Connection from './components/Connection';
import LocationsList from './components/LocationsList'
import LocationDetail from './components/LocationDetail'
import HistoricOpening from './components/HistoricOpening'
import BookingList from './components/BookingList'
import OpenDoor from './components/OpenDoor'

Vue.use(BootstrapVue);

//Rooter Part
const routes = [
  { path: '/', component: Connection },
  { path: '/admin', component: AdminHome },
  { path: '/inscription', component: Inscription },
  { path: '/locations', component: LocationsList },
  { path: '/locations/:id', component: LocationDetail },
  { path: '/historic', component: HistoricOpening },
  { path: '/bookings', component: BookingList },
  { path: '/open-door', component: OpenDoor },
];
const router = new VueRouter({routes});

export default {
  name: 'App',
  router,
  components: {AdminHome},
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

