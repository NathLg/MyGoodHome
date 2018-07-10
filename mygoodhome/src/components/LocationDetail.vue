<template>
  <div>
    <HomePage/>
    <div class="container">
      <h1 style="font-size: 20px">Informations du logement</h1>
      <div class="form-group">
        <label class="col-form-label">Nom</label>
        <input class="form-control" type="text" value="">
      </div>
      <div class="form-group">
        <label class="col-form-label">Adresse</label>
        <input class="form-control" type="text" value="">
      </div>
      <div class="form-group">
        <label class="col-form-label">Code postal</label>
        <input class="form-control" type="search" value="">
      </div>
      <div class="form-group">
        <label class="col-form-label">Ville</label>
        <input class="form-control" type="search" value="">
      </div>
      <div class="form-group">
        <button class="btn btn-info form-control">Enregistrer</button>
      </div>
    </div>
  </div>
</template>
<script>
  import HomePage from "./HomePage";
  export default {
    components: {HomePage}
  }
</script>
