import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import Services from '@/store/modules/Services.store';

export default new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        Services: Services
    }
})