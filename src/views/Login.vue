<template>
  <body class="bodyLogin">
    <div class="divLogin">
      <h3 style="padding:10px; text-align:center">Bienvenido, inicia sesión para continuar</h3>
        <div class="form-group">
          <label class="labelLogin">Usuario</label>
          <input type="email" v-model="usuario" class="form-control" placeholder="Usuario o Email" />
        </div>

        <div>
          <label class="labelLogin">Contraseña</label>
          <input type="password" v-model="contraseña" class="form-control" placeholder="•••••••" />
        </div>

        <br>

        <button class="btn btn-primary btn-block" @click="log()">Iniciar Sesión</button>
    </div>
  </body>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'LogIn',
  data() {
    return {
      usuario: "",
      contraseña: "",
    }
  },
  methods: {
    log() {
      if(this.usuario == "accept@test.com" && this.contraseña == "examen2doParcial") {
        this.$router.replace({ path: 'Home'})
      }
      else if(this.usuario == "") {
        Swal.fire({
          icon : 'info',
          title: 'Correo inválido',
          text : 'Favor de llenar el campo de email',
          confirmButtonText: 'Ok'
        })
      }
      else if (this.contraseña == "") {
        Swal.fire({
          icon : 'info',
          title: 'Contraseña inválida',
          text : 'Favor de llenar el campo de contraseña',
          confirmButtonText: 'Ok'
        })
      } else {
        Swal.fire({
          icon : 'error',
          title: 'Usuario y Contraseña incorrecta',
          text : 'Verifique que está escribiendo su Usuario y Contraseña correctamente.',
          confirmButtonText: 'Ok'
        })
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  .titleh3, .labelLogin {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;

  }
  
  .bodyLogin {
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
    background: url('../assets/prueba.jpeg') no-repeat;
    object-fit: cover;
    position: absolute;
    height: 92%;
    width: 100%;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .divLogin {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 8px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .btnLogin {
    background: #6E3AFF;
    
  }
</style>