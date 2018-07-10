<template>
  <div class="container">
    <HomePage/>
    <form>
      <div class="form-group">
        <label for="email-connection">Email</label>
        <input type="email" class="form-control" id="email-connection" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password-connection">Mot de passe</label>
        <input type="password" class="form-control" id="password-connection" placeholder="Password">
      </div>
      <div class="form-group">
        <a href="Inscription.vue">Pas encore inscrit ?</a>
      </div>
      <button type="submit" class="btn btn-info">Connexion</button>
    </form>
  </div>
</template>
<script>
  import HomePage from "./HomePage";
  export default {
    components: {HomePage}
  }
</script>
