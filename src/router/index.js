import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chatroom from '@/components/chatroom'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: chatroom
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
