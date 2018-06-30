import store from '../vuex/index'

export default {

  config(to, from, next) {

    let loading = store.getters['Loading/getLoading']

    if (!loading) {
      store.dispatch('Loading/setLoading', true)
      loading = true
    }

    // setTimeout(function () {
    //
    // }, 5000)

    next()
    if (loading) {
      store.dispatch('Loading/setLoading', false)
    }

    // let token = localStorage.getItem('Token')

    // let token = 'OdvOFr8+-UeK0jNX-AUbOQ==|UqZ0IecRmBEXz-Z4Ee6m3w==';
    // if (token !== null && to.fullPath === '/login') {
    //   next({
    //     path: '/admin/stats'
    //   })
    // }

    // if (to.meta.requireAuth === true) {
    //   // console.log("teste dentro da rota")
    //   // this route requires auth, check if logged in
    //   // if not, redirect to login page.
    //   if (token === null) {
    //     next({
    //       path: '/'
    //     })
    //   } else {
    //
    //     let objJson = {}
    //     objJson['id']= to.params.id;
    //     objJson['alias'] = to.params.component;
    //     objJson['name'] = to.name;
    //     objJson['action'] = to.params.action
    //
    //     if (objJson.id !== undefined) {
    //       try{
    //         store.dispatch(objJson.action,objJson);
    //         //Aqui devo fazer com que a função chama qualquer action, Assim consigo enviar os dados como Ex: ID. Enviou para uma action que vai fazer a buscar dos dados
    //         // Se a consulta for de sucesso chama a action que é responsavel por criar as tabs
    //       }catch(error){
    //         console.log(error)
    //       }
    //     } else {
    //       next()
    //     }
    //
    //   }
    //
    // } else {
    //   next()
    // }

  }

}
