<template>
  <div style="padding:30px">
    <h1 style="margin-bottom:30px">Información de servicios</h1>
    <div class="row d-inline-flex">
      <div class="col d-inline-flex" v-for="(lista, key) in getListas" :key="key">
        <servicelist :title="lista.title" :description="lista.description" :index="key"/>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col d-flex justify-content-end">
        <button class="btn btn-primary" @click="addService(index)">Añadir servicio</button>
      </div>
    </div>
  </div>
</template>

<script>
import servicelist from "../components/ServiceList"
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'Services',
    components: {
      servicelist,
    },
    computed: {
      ...mapGetters('Services', ["getListas"])
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      ...mapMutations(['addService'])
    }
}
</script>
