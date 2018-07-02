import Http from './DataBaseService'
const urls = {
  get: "v1/tratamentos?page=1&itemPerPage=10",
  generica: "v1/tratamentos"
}
const result = {
  result: [],
  sucess: false
}


const configHeader = {
  responseType: 'json',
  headers: {'Content-Type': 'application/json'}
}

export default {
  install: (Vue) => {
    Vue.prototype.$TratamentoService = {

      Get(params) {
        Http.get(urls.get, params, configHeader)
          .then(res => {
            result.result = res.data.result.data
          })
        return result.result
      },
      GetById(id) {
        Http.get(urls.get + '/' + id, configHeader)
          .then(res => {
            result.result = res.data.result.data
          })
        return result.result
      },
      Post(data) {
        Http.post(urls.generica, data, configHeader)
          .then(res => {
            result.sucess =  true
          })

        return result.sucess
      },
      Put(data) {
        Http.put(urls.generica, data, configHeader)
          .then(res => {
            return res
          })
      },
      Delete(id) {
        Http.delete(urls.generica + '/' + id, configHeader)
          .then(res => {
            return res
          })
      }
    }
  }
}
