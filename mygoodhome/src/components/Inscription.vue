<template>
  <div id="inscription">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Prénom:"
                    label-for="Votre prénom">
        <b-form-input 
                      type="text"
                      v-model="form.firstName"
                      required
                      placeholder="Votre Prénom">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Nom:"
                    label-for="Votre nom"
                    description="We'll never share your email with anyone else.">
        <b-form-input 
                      type="text"
                      v-model="form.lastName"
                      required
                      placeholder="Votre nom">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Email :"
                    label-for="Votre adresse email"
                    description="Nous ne partagerons jamais votre addresse e-mail.">
        <b-form-input type="text"
                      v-model="form.email"
                      required
                      placeholder="Votre email">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Mot de passe"
                    label-for="Votre mot de passe">
        <b-form-input 
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Votre mot de passe">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Confirmer votre mot de passe"
                    label-for="Votre mot de passe">
        <b-form-input 
                      type="password"
                      v-model="form.confirmPassword"
                      required
                      placeholder="Confirmer votre mot de passe">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      // evt.preventDefault();
      // alert(JSON.stringify(this.form));
     console.log(this.form)
      // this.$store.state.user.commit(this.form)
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.firstName = '';      
      this.form.LastName = '';
      this.form.email = '';
      this.form.password = '';
      this.form.confirmPassword = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style lang="scss" scoped>
#html{
  -ms-overflow-style: none !important;
}
#app{
  margin:0em !important;
}
#inscription{
  position: absolute;
  top: 50%; 
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) ;
  max-width: 50em;
  width: auto;
  border: 0.1em solid #d1d1d1;
  margin: auto ;
  padding: 2em;
  border-radius: 3em; 
}
@media screen and (min-width: 1500px) and (min-width: 640px){
  #inscription{
    width: 700px;
  }
}
 
</style>
