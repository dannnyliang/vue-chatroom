<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <button class="btn btn-primary" @click="signOutBtn">Sign out</button>
    <button class="btn btn-primary d-block mx-auto" @click='check'>check</button>

  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'home',
  data(){
    return {
      msg: 'home'
    }
  },
  methods: {
    signOutBtn(){
      // this.$router.replace('signin')
      console.log(this.$route);
      // this.$router.push('/signin')
      firebase.auth().signOut()
      //   .then(
      //     () => {
      //     // if (!firebase.auth().currentUser) {
      //     //   console.log('object');
      //     //   this.$router.push({ path: 'signin' })
      //     // }
      //     }
      //   )
    },
    check(){
      let currentUser = firebase.auth().currentUser
      console.log(currentUser);
    }
  }
}
</script>

