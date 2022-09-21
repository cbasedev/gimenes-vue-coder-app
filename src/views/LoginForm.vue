<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-12">
                <label for="usr_mail" class="form-label">Email</label>
                <input type="email" class="form-control" id="usr_mail" placeholder="Ingrese su Email" v-model="email"/>
            </div>
            <div class="col-12">
                <label for="usr_pass" class="form-label">Password</label>
                <input type="password" class="form-control" id="usr_pass" v-model="password"/>
            </div> 
            <div class="col-12">
                <button class="btn btn-primary" @click="submit()">Ingresar</button>
            </div> 
        </form>
    </div>
</template>

<script>  
export default {
  data() {
    return {
      emailpattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      passpattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      email: "",
      password: ""
    }
  },
  methods:{
    submit(){
      if(this.email.match(this.emailpattern)){
        alert('El Email podría ser correcto si lo validara con datos reales');
      }else{
        alert('Formato de Email erroneo');
      }
      if(this.password.match(this.passpattern)){
        alert('La Contraseña podría ser correcta si la validara con datos reales');
      }else{
        alert('Contraseña erronea');
      }
      
    }
  }
}
</script> 

<style scoped>



</style>



