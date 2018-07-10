<template>
    <div class="homepage">
        <b-navbar variant="light" fixed="top">
          <b-navbar-nav>
            <b-nav-item href="#">Locations</b-nav-item>
            <b-nav-item href="#">Ajouter une location</b-nav-item>
          </b-navbar-nav>
          <b-navbar-brand tag="h1" class="mb-0" href="#">
           {{ brand }}
          </b-navbar-brand>
          
          <b-navbar-nav>
            <b-nav-item href="#">Utilisateurs</b-nav-item>
            <b-button>
              <img width="20px" height="25px" src="/static/Disconnect-btn.svg"/>
            </b-button>
          </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data (){
        return {
            brand: 'My Good Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    background-color: blue;
}
</style>
