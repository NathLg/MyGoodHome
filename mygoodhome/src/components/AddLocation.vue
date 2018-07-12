<template>
    <div id="addLocation">
    <Header/>
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
            <label class="col-form-label">Propriétaire</label>
            <input class="form-control" type="search" value="">
        </div>
        <div class="form-group">
        
        <button class="btn btn-info form-control">Ajouter</button>
        </div>
    </div>
</template>

<script>
  import Header from "./Header";
  export default {
    name: 'AddLocation',
    components: {Header}
  }
</script>