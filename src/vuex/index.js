import Vue from 'vue'
import Vuex from 'vuex'
import Loading from './loading/index'

Vue.use(Vuex)

const modules={
  Loading
}

export default new Vuex.Store({
  modules
})
