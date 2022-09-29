<template>
    <div>
        <NavBar/>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">E-Mail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id"> 
                <th scope="row">{{user.id}}</th>
                <td>{{user.nombre}}</td>
                <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    export default 
    {    
        data(){

        },
        methods:{
            async getUsers(){
                await fetch(`https://63345c4e433198e79dd66a15.mockapi.io/users`)
                      .then((users => users.json()))
                      .catch(err => console.log(`${err}`))
            }

        }
    }
    )
</script>

<style scoped>

</style>