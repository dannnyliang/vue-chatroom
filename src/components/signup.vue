<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">註冊</h1>
      </div>
      <div class="col-12">
        <img src="../assets/logo.png" class="d-block mx-auto">
      </div>

    <form class="offset-4 col-4">
      <div class="form-group row">
        <input class="form-control" id="emal" placeholder="e-mal" v-model='email'>
      </div>
      <div class="form-group row">
        <input type="password" class="form-control" id="password" placeholder="Password" v-model='password'>
      </div>
      <button class="btn btn-primary d-block mx-auto" @click="signUp">Sign Up</button>
    </form>
  </div>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (res) {  
            alert('Success')
          },
          function (err) {  
            alert(err.message)
          }
        )
    }
  }
}
</script>

