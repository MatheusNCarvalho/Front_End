import Http from './base/UrlConfig'

const configHeader = {
  responseType: 'json',
  headers: {'Content-Type': 'application/json'}
}

export default {
  install: (Vue) => {
    Vue.prototype.$TratamentoService = {
       Get(url, data) {
        Http.get('v1/tratamentos?page=1&itemPerPage=10', data, configHeader)
          .then(res => {
            console.log("Deu certo", res)
          })
          .catch(res => {
            console.log("Deu ruim", res)
          })
      },
       Post(url, data) {
        Http.post(url, data, configHeader)
          .then(res => {
            return res
          })
          .catch(res => {
            return res
          })
      },
       Put(url, data) {
        Http.put(url, data, configHeader)
          .then(res => {
            return res
          })
          .catch(res => {
            return res
          })
      },
       Delete(url, data) {
        Http.delete(url, data, configHeader)
          .then(res => {
            return res
          })
          .catch(res => {
            return res
          })
      }
    }
  }
}
