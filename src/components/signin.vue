<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">登入</h1>
      </div>
      <div class="col-12">
        <img src="../assets/logo.png" class="d-block mx-auto">
      </div>

    <form class="offset-4 col-4">
      <div class="form-group row">
        <input class="form-control" id="email" placeholder="e-mail" v-model='email'>
      </div>
      <div class="form-group row">
        <input type="password" class="form-control" id="password" placeholder="Password" v-model='password'>
      </div>
      <router-link class="d-block" :to="{ path: '/signup' }">Don't have account? Create One</router-link>
      <button class="btn btn-primary d-block mx-auto" @click='signIn'>Sign In</button>
      <button class="btn btn-primary d-block mx-auto" @click='signOut'>Sign Out</button>
      <button class="btn btn-primary d-block mx-auto" @click='check'>check</button>
    </form>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signin',
  data () {
    return {
      email: 'hugo.singh@example.com',
      password: '123456'
    }
  },
  methods: {
    signIn(){
      let currentUser = firebase.auth().currentUser
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          function (res) {  
            // console.log('success');
            console.log(currentUser);
            // this.$router.push({ path: 'chatroom'})
          },
          function (err) {  
            alert(err.message)
          }
        )
    },
    signOut(){
      firebase.auth().signOut()
    },
    check(){
      let currentUser = firebase.auth().currentUser
      console.log(currentUser);
    }
  },
  // beforeMounted(){
  //   firebase.auth().signInWithEmailAndPassword('hugo.singh@example.com', '123456')
  //   console.log('object');
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: #6c757d;
    font-size: 12px;
    text-align: center;
  }
</style>
