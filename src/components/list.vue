<template>
  <div id="app" class="pt-5">
    <div>
      狀態: {{status}}
    </div>
  <table class="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, i) in listData" :key="i" :class="{'bg-info' : item.selected}">
      <th scope="row">{{i + 1}}</th>
      <td><img :src="item.picture.large" alt="picture" width="50"></td>
      <td>{{item.name.title}}. {{item.name.first}} {{item.name.last}}</td>
      <td>{{item.email}}</td>
      <td>
        <button type="button" class="btn btn-outline-primary" @click="selectItem(item, i)">選擇</button>
      </td>
    </tr>
  </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "list",
  props: ["status"],
  data() {
    return {
      msg: "LIST PAGES",
      listData: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.axios
        .get("https://randomuser.me/api/?results=50")
        .then(function(response) {
          console.log(response.data.results);
          vm.listData = response.data.results;
          vm.listData.forEach(item => vm.$set(item, 'selected', false))
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    selectItem(item, i) {
      item.selected = !item.selected
      console.log(item);
      let vm = this;
      vm.$emit("pushName", item.name.last);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss">

</style>
