<template>
    <div id="Header">
        <b-navbar variant="light" fixed="top">
          <b-navbar-nav>
              <b-button class="btn-menu" v-on:click="ShowMenu = !ShowMenu">
                  <img width="20px" height="25px" src="/static/Burger-menu.svg"/>
              </b-button>

          </b-navbar-nav>
            <b-navbar-brand tag="h1" class="mb-0" href="#">
            {{ brand }}
            </b-navbar-brand>
          <b-navbar-nav>
            <b-button>
              <img width="20px" height="25px" src="/static/Disconnect-btn.svg"/>
            </b-button>
          </b-navbar-nav>
        </b-navbar>
        <li class="menu" v-if="ShowMenu" v-on:click="ShowMenu = !ShowMenu">
            <h2>Locations</h2>
                <ul v-on:click="redirectListLocation">Listes des locations</ul>
                <ul v-on:click="redirectAddLocation">Ajouter une location</ul>
            <h2>Utilisateurs</h2>
                <ul v-on:click="redirectListUser">Liste Utilisateurs</ul>
        </li>

    </div>
</template>
<script>
export default {
    name: 'Header',
    data (){
        return {
            brand: 'My Good Home',
            ShowMenu: false
        }
    },
    methods:{
        redirectListLocation: function(){
            router.push({ path: '/ListLocation'})
        },
        redirectAddLocation: function(){
            router.push({ path: '/AddLocation'})
        },
        redirectListUser: function(){
            router.push({ path: '/ListUser'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
