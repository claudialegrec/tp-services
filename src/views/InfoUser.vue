<template>
    <div>
      <div class="row">
          <div class="col" style="padding:20px; margin-left:20px">
              <h2>Informacion de Usuario</h2>
          </div>
      </div>

      <div class="row">
          <div class="col" style="margin-left:20px">
            <div style="padding:10px">
              <h5>Nombre:</h5>
              {{ info.nombre }}
            </div>
            <div style="padding:10px">
              <h5>Apellido Paterno:</h5>
              {{ info.apellidoP }}
            </div>
            <div style="padding:10px">
              <h5>Apellido Materno:</h5>
              {{ info.apellidoM }}
            </div>
            <div style="padding:10px">
              <h5>Edad:</h5>
              {{ info.edad }}
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'InfoUser',
    components: {
    },
    data() {
      return {
        info: {
          nombre: "Claudia",
          apellidoP: "Alegre",
          apellidoM: "Castillo",
          edad: 21,
        },
      }
    }
}
</script>