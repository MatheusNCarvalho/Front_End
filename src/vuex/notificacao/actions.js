import Vue from 'vue'
import router from '../../router/routes'

const setRedirect = ({state,dispatch, commit}, obj)=>{

  window.location.href= '/tratamentos'
  //this.$router.push({path: '/tratamentos'})
}

const setSucess = ({commit}, obj) => {
  Vue.swal({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    type: 'success',
    title: obj.title+' com sucesso!',
    timer: 3000
  })
}

const setError = ({commit}, obj) => {
  Vue.swal({
    type: 'error',
    title: 'Oops...',
    text: obj
  })
}

const setError400 = ({commit}, obj) => {
  Vue.swal({
    type: 'error',
    title: 'Oops...',
    html: '<strong>' + JSON.stringify(obj.errors.map(x => x.message)) + '</strong>'
  })
}

const setDeleteSucess = ({commit}, obj) => {
  Vue.swal(
    'Excluido com sucesso!',
    '',
    'success'
  )
}

export default {
  setSucess,
  setError,
  setError400,
  setDeleteSucess,
  setRedirect
}
