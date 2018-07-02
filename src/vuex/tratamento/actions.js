import Http from '../../servicos/dados/DataBaseService'

const configHeader = {
  responseType: 'json',
  headers: {'Content-Type': 'application/json'}
}
const url = {
  get: "v1/tratamentos?page=1&itemPerPage=10",
  generica: "v1/tratamentos"
}
const Get = async ({dispatch, commit}, obj) => {
  const list = (await Http.get(url.get, obj, configHeader)).data.result.data
  commit('SET_TRATAMENMTO_LIST', list)
}
const GetById = ({commit}, obj) => {
  Http.get(url.generica + '/' + obj.id).then(res => {
    commit('SET_TRATAMENTO', res.data.result.data)
  })


}
const Save = ({dispatch, commit}, obj) => {
  commit('CLEAN_TRATAMENTO_LIST')
  Http.post(url.generica, obj, configHeader).then(res => {

    dispatch('Notificacao/setSucess', {title: 'Salvo'}, {root: true})
    window.location.href = '/#/tratamentos'
  }).catch(res => {

  })

}

const Update = async ({dispatch, commit}, obj) => {
  commit('CLEAN_TRATAMENTO_LIST')
  Http.put(url.generica, obj, configHeader).then(res => {
    dispatch('Notificacao/setSucess', {title: 'Atualizado'}, {root: true})
    window.location.href = '/#/tratamentos'
  })
}


const Delete = ({dispatch, commit}, obj) => {
  Http.delete(url.generica + '/' + obj.id, configHeader).then(res => {
    commit('REMOVER_ITEM_LIST_TRATAMANTO', obj)
    dispatch('Notificacao/setDeleteSucess', {}, {root: true})
  })

}

export default {
  Get,
  GetById,
  Save,
  Update,
  Delete
}
