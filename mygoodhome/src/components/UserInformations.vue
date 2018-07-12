<template>
    <div>
    <Header/>
        <b-card id="UserDetails">
            <h1 style="font-size: 20px">Informations de l'utilisateur</h1>
            <div>Prénom: {{firstName}}</div>
            <div>Nom: {{lastName}}</div>
            <div>email: {{email}}</div>
            <b-btn v-b-modal.UserInformationModification>Modifier</b-btn>

            <b-modal id="UserInformationModification" title="Modifications">
            <h1 style="font-size: 20px">Vos informations</h1>
            <div class="form-group">
                <label class="col-form-label">Prénom</label>
                <input class="form-control" type="text" value="">
            </div>
            <div class="form-group">
                <label class="col-form-label">Nom</label>
                <input class="form-control" type="text" value="">
            </div>
            <div class="form-group">
                <label class="col-form-label">Adresse mail</label>
                <input class="form-control" type="text" value="">
            </div>
            <div class="form-group">
                <button class="btn btn-info form-control">Enregistrer</button>
            </div>
        </b-modal>
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

