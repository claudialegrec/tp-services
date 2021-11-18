<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="row">
        <div class="col d-flex justify-content-end">
          <a href="#" class="btn btn-primary">Agendar cita</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'ServiceList',
    props: {
      title: String,
      description: String,
      index: Number
    },
    computed: {
      ...mapState(['listas'])
    }
}
</script>
