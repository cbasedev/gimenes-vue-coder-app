<template>
  <div id="app">
    <UsersForm/>
  </div>
</template>

<script>
//import HomePage from './views/HomePage.vue'
//import LoginForm from './views/LoginForm.vue';
import UsersForm from './views/UsersForm.vue';

export default {
    name: 'App',
    components: {
    //HomePage,
    //LoginForm,
    UsersForm
  
}
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
