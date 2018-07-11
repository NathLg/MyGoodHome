<template>
  <div>
    <Header/>
    <div class="list-group">
      <h1 class="h1-page-title">Mes réservations</h1>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Ville 1</h5>
        </div>
        <div>
          <p class="mb-1">Adresse</p>
          <p class="mb-1">Code postal + ville</p>
          <p class="mb-1">Contact propriétaire</p>
        </div>
      </div>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Ville 2</h5>
        </div>
        <div>
          <p class="mb-1">Adresse</p>
          <p class="mb-1">Code postal + ville</p>
          <p class="mb-1">Contact propriétaire</p>
        </div>
      </div>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Ville 3</h5>
        </div>
        <div>
          <p class="mb-1">Adresse</p>
          <p class="mb-1">Code postal + ville</p>
          <p class="mb-1">Contact propriétaire</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "./Header";
  export default {
    components: {Header}
  }
</script>
