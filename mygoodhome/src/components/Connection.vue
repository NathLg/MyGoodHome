 <template>
  <div id="connection">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group 
        label="Adresse email:"
        description="Nous ne partagerons jamais votre addresse e-mail.">
        <b-form-input
          type="email"
          v-model="form.email"
          required
          placeholder="Votre email">
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Mot de passe:">
        <b-form-input 
                      type="password"
                      v-model="form.name"
                      required
                      placeholder="Mot de passe">
        </b-form-input>
      </b-form-group>
      <a v-on:click="goInscription">Pas encore inscrit ?</a>
      <b-button type="submit" variant="primary">Connexion</b-button>
    </b-form>
  </div>
</template>

<script>
  import Header from "./Header";
  export default {
    data () {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },

    components: {Header},

    methods: {
        onSubmit: function() {
          
          this.$router.push({ path: '/admin'})
           
          // if(user.role === 'admin'){
          //   this.$router.push({ path: '/admin'})
          // }
          //  if(user.role === 'user'){
          //   this.$router.push({ path: '/user'})
          // }  
        },
        goInscription: function(){
          this.$router.push({ path: '/inscription'})
        }
    }
  }
</script>
<style lang="scss" scoped>
#app{
  margin:0em !important;
}
#connection{
  transform: translateY(-50%);
  max-width: 50em;
  width: auto;
  border: 0.1em solid #d1d1d1;
  margin: 50vh auto 0em;
  padding: 2em;
  border-radius: 3em;
}
</style>

