<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="row">
        <div class="col d-flex justify-content-end">
          <a href="#" class="btn btn-primary" @click="agendarCita()">Agendar cita</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'ServiceList',
    props: {
      title: String,
      description: String,
    },
    computed: {
      ...mapGetters('Services', ["getListas"])
    },
    mounted() {
      console.log('%c⧭', 'color: #006dcc', this.getListas)
    },
    data() {
      return {
      }
    },
    methods: {
      agendarCita() {
        this.$router.replace({name: 'AgendarCita'})
      },
    }
}
</script>
