<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import globalClasses from'./global-style.scss'

import Connection from './components/Connection'
import Inscription from './components/Inscription'

import Header from './components/Header.vue'
import AdminHome from './components/AdminHome.vue'
import UserHome from './components/UserHome.vue'
import LocationsList from './components/LocationsList'
import AddLocation from './components/AddLocation'
import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'
import UserLocationsList from './components/UserLocationsList'
import UserLocationDetails from './components/UserLocationDetails'
import LocationDetails from './components/LocationDetails'
import HistoricOpening from './components/HistoricOpening'
import BookingList from './components/BookingList'
import OpenDoor from './components/OpenDoor'
import UserInformations from './components/UserInformations.vue';

Vue.use(BootstrapVue);
Vue.use(Vuex)
//Rooter Part
const routes = [
  { path: '/', component: Connection },
  { path: '/inscription', component: Inscription },
  { path: '/admin', component: AdminHome},
  { path: '/historic', component: HistoricOpening },
  { path:  '/admin/userslist', component: UsersList },
  { path:  '/admin/user/:id', component: UserDetails },
  { path:  '/admin/locations', component: LocationsList },
  { path: '/admin/locations/:id', component: LocationDetails },
  { path: '/admin/addLocations', component: AddLocation },
  { path: '/user', component: UserHome},
  { path: '/user/locations', component: UserLocationsList},
  { path: '/user/locations/:id', component: UserLocationDetails},
  { path: '/user/informations', component: UserInformations},
  { path: '/user/open-door', component: OpenDoor },
  { path: '/user/bookings', component: BookingList },
];

const store = new Vuex.Store({
  state: {
    user:{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
    }
  },
  mutations: {
    
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})


const router = new VueRouter({routes, mode: 'history'});

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

