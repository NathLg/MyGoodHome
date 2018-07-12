<template>
    <div>
    <Header/>
        <b-card id="UserRights">
            <div class="title">Droits et accès</div>
            <div>Autorisations: {{authorization}}</div>
            <div>Historique d'ouverture: {{openingHistoric}}</div>
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
#UserRights{
    width: 40em;
    margin: 4.5em auto;
    div+*{
      margin-top: 2em;
    }
}
</style>


