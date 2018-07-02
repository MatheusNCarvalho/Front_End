import Vue from 'vue'
import Vuex from 'vuex'
import Loading from './loading/index'
import Tratamento from './tratamento/index'
import Notificacao from './notificacao/index'

Vue.use(Vuex)

const modules={
  Loading,
  Tratamento,
  Notificacao
}

export default new Vuex.Store({
  modules
})
