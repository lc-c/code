<template>
  <div id="app">
    <router-view :user="user" :change="change"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.goHome();
  },
  data() {
    return {
      user: ""
    }
  },
  methods: {
    change(name,value) {
      this[name] = value;
    },
    goHome(){
      if(this.user===""){
        this.$router.push('/login');
      }
    }
  },
  watch: {
    $route(){
      this.goHome();
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
