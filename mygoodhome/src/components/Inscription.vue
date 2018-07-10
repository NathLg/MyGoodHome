<template>
  <div class="container">
    <Header/>
    <form>
      <div class="form-group">
        <label for="email-inscription">Email</label>
        <input type="email" class="form-control" id="email-inscription" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password-inscription">Mot de passe</label>
        <input type="password" class="form-control" id="password-inscription" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-info">Inscription</button>
    </form>
  </div>
</template>
<script>
  import Header from "./Header";
  export default {
    components: {Header}
  }
</script>
