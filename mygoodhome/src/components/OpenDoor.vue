<template>
  <div>
    <Header/>
    <div class="container">
      <div id="open-door">
        <h1 id="door-to-open">Sélectionnez la porte à ouvrir</h1>
      </div>
      <button class="btn btn-info open-door-btn">Immeuble</button>
      <button class="btn btn-warning open-door-btn">Logement</button>
      <button class="btn btn-danger open-door-btn">Garage</button>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  export default {
        name: "OpenDoor",
        components: {Header}
    }
</script>

<style scoped>

</style>
