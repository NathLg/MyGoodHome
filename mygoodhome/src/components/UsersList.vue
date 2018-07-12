<template>
  <div id="UserList">
    <Header/>
    <div class="list-group">
      <h1 style="font-size: 20px">Les utilisateurs</h1>
      <a v-on:click="detailUser" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">User 1</h5>
        </div>
        <div>
          <p class="mb-1">Informations</p>
          <p class="mb-1">Logements attribuées</p>
          <p class="mb-1">Droits & accès</p>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
       <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">User 2</h5>
        </div>
        <div>
          <p class="mb-1">Informations</p>
          <p class="mb-1">Logements attribuées</p>
          <p class="mb-1">Droits & accès</p>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
       <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">User 3</h5>
        </div>
        <div>
          <p class="mb-1">Informations</p>
          <p class="mb-1">Logements attribuées</p>
          <p class="mb-1">Droits & accès</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import Header from "./Header";
  export default {
    name: 'UserLists',
    components: {Header},
    methods:{
      detailUser: function (){
        this.$router.push('/admin/user/:id')
      }
    }
  }
</script>
