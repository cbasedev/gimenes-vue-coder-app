<template>
  <div id="app">
    <FoodCard/>
  </div>
</template>

<script>
import FoodCard from './components/FoodCard.vue'
import FoodCard from './components/Login.vue'

export default {
  name: 'App',
  components: {
    FoodCard,
    Login 
}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
