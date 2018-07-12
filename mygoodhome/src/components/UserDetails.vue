<template>
    <div>
    <Header/>
        <b-card id="UserDetails">
            <h1 style="font-size: 20px">Informations de l'utilisateur</h1>
            <div>Prénom: {{firstName}}</div>
            <div>Nom: {{lastName}}</div>
            <div>email: {{email}}</div>
            <card>
                <b-card style="float: left">
                    <div class="title">Logements attribués</div>
                    <div>Adresse: {{adresse}}</div>
                    <div>Code postal: {{postalCode}}</div>
                    <div>Ville: {{city}}</div>
                </b-card>
                <b-card>
                    <div class="title">Droits et accès</div>
                    <div>Autorisations: {{authorization}}</div>
                    <div>Historique d'ouverture: {{openingHistoric}}</div>
                </b-card>
            </card>
        </b-card> 
    </div>
</template>
<script>
  import Header from "./Header";
  export default {
    components: {Header}
  }
</script>

<style lang="scss" scoped>
#UserDetails{
    width: 40em;
    margin: 4.5em auto;
    div+*{
      margin-top: 2em;
    }
    card{

        vertical-align: middle;
        word-wrap: none;
       
        .card{
            margin: 0em 0.5em;
            width: 18em;
        }
        
    }
}
</style>

