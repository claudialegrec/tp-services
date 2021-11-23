<template>
  <div>
    <div class="row">
      <div class="col" style="padding:20px; margin-left:20px">
        <h2>Agenda tu cita</h2>
      </div>
    </div>

    <div class="row d-flex">
      <div class="col-sm-2" style="padding:20px; margin-left:20px">
        <label>Nombre(s):</label>
        <input type="text" class="form-control" placeholder="Nombre">
      </div>

      <div class="col-sm-2" style="padding:20px; margin-left:20px">
        <label>Primer apellido:</label>
        <input type="text" class="form-control" placeholder="Apellido Paterno">
      </div>

      <div class="col-sm-2" style="padding:20px; margin-left:20px">
        <label>Segundo apellido:</label>
        <input type="text" class="form-control" placeholder="Apellido Materno">
      </div>
    </div>

    <div class="row d-flex align-items-center">
      <div class="col-sm-4" style="padding:20px; margin-left:20px">
        <label>Fecha a agendar:</label>
        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      </div>

      <div class="col-sm-2" style="margin-bottom:8px">
        <label>Hora:</label>
        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      </div>


      <div class="col-sm-2 d-flex" style="margin-top:24px">
        <a href="#" class="btn btn-primary" @click="registrar()">Agendar cita</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AgendarCita',
    methods: {
      registrar() {
        this.$router.replace({name: 'Schedule'})
      }
    }
}
</script>
