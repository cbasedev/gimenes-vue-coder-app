<template>
    <div>
        <NavBar></NavBar>
        <FoodCard></FoodCard>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FoodCard from "@/components/FoodCard.vue";
export default {
  name: 'HomePage',
  components: {
    NavBar,
    FoodCard
    }
}

</script>

<style lang="scss" scoped>

</style>
