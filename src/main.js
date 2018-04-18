// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase';

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// Initialize Firebase


/* eslint-disable no-new */
// firebase.auth().onAuthStateChanged(function (user) {  
//   if (!app) {
let app = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App },
  beforeMount(){
    let config = {
      apiKey: "",
      authDomain: "vuepract-chatroom.firebaseapp.com",
      databaseURL: "https://vuepract-chatroom.firebaseio.com",
      projectId: "vuepract-chatroom",
      storageBucket: "vuepract-chatroom.appspot.com",
      messagingSenderId: "506391478557"
    };
    firebase.initializeApp(config);
      }
})
    
//   }
// })
