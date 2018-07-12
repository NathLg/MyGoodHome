<template>
  <div>
    <Header/>
    <b-card id="LocationDetails" >
      <h1 style="font-size: 20px">Informations du logement</h1>
      <div>L'adresse: {{adresse}}</div>
      <div>Code Postal: {{codePostal}}</div>
      <div>Ville: {{ville}}</div>
    </b-card> 
    <OpenDoor/>
    </div>
</template>
<script>
  import Header from "./Header";
  import OpenDoor from "./OpenDoor";
  export default {
    components: {Header, OpenDoor}
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

