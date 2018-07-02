import store from "../../vuex/index";


export default {
  main(instancia) {
    instancia.interceptors.request.use(function (response) {
      store.dispatch('Loading/setLoading', true)
      return response;
    })

    instancia.interceptors.response.use(function (response) {
      store.dispatch('Loading/setLoading', false)
      return response;
    }, function (error) {
      store.dispatch('Loading/setLoading', false)
      if (error.response != undefined && 401 === error.response.status) {

      } else if (error.message === "Network Error") {
        store.dispatch('Notificacao/setError', 'Erro Interno no Serivdor')
      } else if (error.response != undefined && 400 === error.response.status) {
        store.dispatch('Notificacao/setError400', error.response.data)
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    });

  }
}
