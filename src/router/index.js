import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import signin from '@/components/signin'
import signup from '@/components/signup'
import home from '@/components/home'
import chatroom from '@/components/chatroom'
import list from '@/components/list'


Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: chatroom,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      // meta: {
      //   requiresAuth: true
      // }
    }
  ]
})

// router.beforeEach(function (to, from, next) {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
//   if (requiresAuth && !currentUser) {
//     console.clear()
//     console.log(currentUser);
//     console.log('res1');
//     next('signin')
//   }
//   // else if (!requiresAuth && currentUser) {
//   //   console.clear()
//   //   console.log(currentUser);
//   //   console.log('res2');
//   //   next('home')
//   // }
//   else {
//     console.clear()
//     console.log(currentUser);
//     console.log('res3');
//     next()
//   }
//   // next()
// })



export default router


