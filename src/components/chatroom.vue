<template>
  <div class="chatroom">
  <div class="container-fluid">
  <div class="row">

  <div class="col-9">
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="輸入對話內容" v-model="tempmessage">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="submitMessages">Submit</button>
    </div>
  </div>

  <div class="media mt-3" v-for="(message, key) in messages" :key="key" :class="{'text-success offset-3' : message.username != username }">
    <img class="mx-3 mt-0" width="50" height="50" src="https://downloads.andyroid.net/wp-content/uploads/2015/12/mr-square-icon.png" v-if="message.username == username">
    <div class="media-body text-justify">
      <h5 class="mt-0">{{message.username}}</h5>
      <p>{{message.message}}</p>
    </div>
    <img class="mx-3 mt-0" width="50" height="50" src="https://downloads.andyroid.net/wp-content/uploads/2015/12/mr-square-icon.png" v-if="message.username != username">
  </div>
  </div>

  <div class="col-3">
    <div class="card">
      <div class="card-header">你的姓名</div>
      <div class="card-block">
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="輸入使用者姓名" v-model="tempuser">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="updateUsername">Submit</button>
            </div>
          </div>
            <p>目前使用者 : {{username}}</p>
        </div>
      </div>
    </div>
  </div>


  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'chatroom',
  data () {
    return {
      username: 'Casper',
      tempuser: '',
      tempmessage: '',
      messages: [
        {
          username: 'Casper',
          message: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
        },
        {
          username: 'Pon Pon',
          message: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
        }
      ]
    }
  },

  methods: {
    updateUsername() {
      const vm = this
      vm.username = vm.tempuser
    },

    submitMessages() {
      const vm = this //this可能因取用對象不同而指向不同目標，用變數先固定下來
      vm.messages.push({
        username: vm.username,
        message: vm.tempmessage
      })
      vm.tempmessage = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.chatroom{
  text-align: left;
}
</style>
