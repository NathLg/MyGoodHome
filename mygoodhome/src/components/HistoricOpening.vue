<template>
  <div>
    <h1 class="display-3" style="font-size: 20px">Historique des ouvertures</h1>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Nom du logement</h5>
          <small>14/08/2018</small>
        </div>
        <div>
          <p class="mb-1">Heure d'ouverture</p>
          <p class="mb-1">Coordonnées utilisateur</p>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Nom du logement</h5>
          <small class="text-muted">25/08/2018</small>
        </div>
        <div>
          <p class="mb-1">Heure d'ouverture</p>
          <p class="mb-1">Coordonnées utilisateur</p>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Nom du logement</h5>
          <small class="text-muted">11/10/2018</small>
        </div>
        <div>
          <p class="mb-1">Heure d'ouverture</p>
          <p class="mb-1">Coordonnées utilisateur</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import Header from "./Header";
  export default {
    name: 'HistoricOpening',
  }
</script>
