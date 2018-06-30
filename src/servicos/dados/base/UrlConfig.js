import Vue from 'vue'
import store from '../../../vuex/index'
import axios from 'axios';

// let token = localStorage.getItem('Token')

let token = '';


const HTTP = axios.create({
  baseURL: 'http://192.168.2.106:56810/',
  headers: {
    'token': token
  }

})

HTTP.interceptors.request.use(function (response) {
  store.dispatch('Loading/setLoading', true)
  return response;
})

HTTP.interceptors.response.use(function (response) {
  store.dispatch('Loading/setLoading', false)
  return response;
}, function (error) {
  store.dispatch('Loading/setLoading', false)
  if (error.response != undefined && 401 === error.response.status) {
    Vue.swal({
      title: "Session Expired",
      text: "Your session has expired. Would you like to be redirected to the login page?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes",
      closeOnConfirm: false
    }).then((res) => {  })

  } else if (error.message === "Network Error") {
    Vue.swal({
      type: 'error',
      title: 'Oops...',
      text: 'Sem conexão com o Servidor!'
    })
  } else if(error.response != undefined && 404 === error.response.status){
    Vue.swal({
      type: 'error',
      title: 'Oops...',
      text: error.message
    })
  } else {
    return Promise.reject(error);
  }
});

export default HTTP

