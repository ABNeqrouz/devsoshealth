import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'patient';

export default new Vuex.Store({
    modules: {

    },
    strict: debug
});