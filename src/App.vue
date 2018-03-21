<template>
  <div id="app">
    
  <ul class="nav">
  <li class="nav-item">
    <router-link class="nav-link" :to="{ path: '/' }">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="{ path: '/chatroom' }">聊天室</router-link>
  </li>
  </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
