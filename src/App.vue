<template>
  <div id="app">
    <LoginForm/>
  </div>
</template>

<script>
//import HomePage from './views/HomePage.vue'
import LoginForm from './views/LoginForm.vue';

export default {
    name: 'App',
    components: {
    //HomePage,
    LoginForm
}
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
