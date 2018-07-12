<template>
  <div>
    <Header/>
    <b-card id="LocationDetails" >
      <h1 style="font-size: 20px">Informations du logement</h1>
      <div>L'adresse: {{adresse}}</div>
      <div>Code Postal: {{codePostal}}</div>
      <div>Ville: {{ville}}</div>
      <b-btn v-b-modal.locationModification>Modifier</b-btn>
    </b-card>
    <b-modal id="locationModification" title="Modifications">
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
    </b-modal>
      
    </div>
</template>
<script>
  import Header from "./Header";
  export default {
    components: {Header}
  }
</script>

<style lang="scss" scoped>
#LocationDetails{
    width: 40em;
    margin: 4.5em auto;
    div+*{
      margin-top: 2em;
    }
}
</style>

