const SET_TRATAMENMTO_LIST = (state, obj) => {
  state.tratamentoList = obj
}
const SET_TRATAMENTO = (state, obj) => {
  state.form = obj
}
const CLEAN_TRATAMENTO_LIST = (state) => {
  state.tratamentoList = []
}
const REMOVER_ITEM_LIST_TRATAMANTO = (state, obj) => {
  const index = state.tratamentoList.indexOf(obj)
  state.tratamentoList.splice(index, 1)
}
export default {
  SET_TRATAMENMTO_LIST,
  SET_TRATAMENTO,
  CLEAN_TRATAMENTO_LIST,
  REMOVER_ITEM_LIST_TRATAMANTO
}
