<template>
  <div id="app">
    
  <ul class="nav">
  <li class="nav-item">
    <router-link class="nav-link" :to="{ path: '/home' }">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="{ path: '/chatroom' }">聊天室</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="{ path: '/list' }">列表</router-link>
  </li>
  <li class="nav-item nUser px-3">
    Hello, {{username}}
  </li>
  <li>
  <div class="nav-item form-inline px-3">
    <select name="" id="" class="form-control" @change="changeStatus" v-model="status">
      <option value="線上">線上</option>
      <option value="線下">線下</option>
    </select>
  </div>

  </li>
  </ul>

  <router-view :status="trans_status" @pushName="getName"></router-view>
  </div>


</template>
<script>
export default {
  name: "App",
  data() {
    return {
      status: '線上',
      trans_status: '線上',
      username: 'Liang'
    }
  },
  methods: {
    changeStatus() {
      this.trans_status = this.status
    },
    getName(newName) {
    let vm = this
    vm.username = newName
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
:root{
  --dark: #343a40;
}

.nav {
  font-family: 微軟正黑體;
  background-color: var(--dark);
  color: #fff;
}

.nav-link{
  color: rgb(240, 240, 240);
}
.nav-link:hover,.nav-link:focus{
  color: #fff;
}

.nUser{
  line-height: 40px;
}
</style>
