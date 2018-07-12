<template>
    <div id="Header">
        <b-navbar variant="light" fixed="top">
          <b-navbar-nav>
              <b-button class="btn-menu" v-on:click="ShowMenu = !ShowMenu, actualPath">
                  <img width="20px" height="25px" src="/static/Burger-menu.svg"/>
              </b-button>
          </b-navbar-nav>
            <b-navbar-brand tag="h1" class="mb-0"  v-on:click="backHome">
            {{ brand }}
            </b-navbar-brand>
          <b-navbar-nav>
            <b-button v-on:click="disconnect">
              <img width="20px" height="25px" src="/static/Disconnect-btn.svg"/>
            </b-button>
          </b-navbar-nav>
        </b-navbar>
        <li class="menu" v-if="ShowMenu && adminView" v-on:click="ShowMenu = !ShowMenu">
            <h2>Locations</h2>
                <ul v-on:click="redirectListLocation">Listes des locations</ul>
                <ul v-on:click="redirectAddLocation">Ajouter une location</ul>
            <h2>Utilisateurs</h2>
                <ul v-on:click="redirectListUser">Liste Utilisateurs</ul>
        </li>
         <li class="menu" v-if="ShowMenu && adminView === false" v-on:click="ShowMenu = !ShowMenu">
            <h2>Mes Locations</h2>
                <ul v-on:click="redirectListMyLocation">Listes de mes locations</ul>
            <h2>Mes informations</h2>
                <ul v-on:click="redirectUserInformations">Informations personnelles</ul>
                <ul v-on:click="redirectUserRight">Mes droits et accès</ul>
        </li>
    </div>
</template>
<script>
import '../global-style.scss'

export default {
    name: 'Header',
    data (){
        return {
            brand: 'My Good Home',
            ShowMenu: false,
            adminView:false,
        }
    },
    created: function(){
        this.actualPath(); 
    },
    methods:{
         actualPath: function (){
            if(this.$route.fullPath == '/admin' || this.$route.fullPath == '/admin/locations' || this.$route.fullPath == '/admin/addlocations' || this.$route.fullPath == '/admin/locations/:id' || this.$route.fullPath == '/admin/userslist' || this.$route.fullPath == '/admin/user/:id'){
                return this.adminView = true
            } 
        },
        backHome: function(){
            this.actualPath()
            if(this.adminView === true){
                this.$router.push('/admin');
            }
            else if(this.adminView === false){
                this.$router.push('/user');
            }
        },
        disconnect: function(){
            this.$router.push('/');
        },
        redirectListLocation: function(){
            this.$router.push('/admin/locations');
        },
        redirectAddLocation: function(){
           this.$router.push({ path: '/admin/addlocations'})
        },
        redirectListUser: function(){
            this.$router.push({ path: '/admin/userslist'})
        },
          redirectListMyLocation: function(){
            this.$router.push('/user/locations');
        },
        redirectUserInformations: function(){
            this.$router.push({ path: '/user/informations'})
        },
        redirectUserRight: function(){
            this.$router.push({ path: '/user/rights'})
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .mb-0{
        cursor: pointer;
    }
</style>
