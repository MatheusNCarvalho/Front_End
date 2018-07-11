import ContentLayout from '../components/dashboard/Content.vue'
import Home from '@/components/home/Inicio.vue'
import NaoEncontrado from '../components/erros/NaoEncontrado.vue'

import AdicionarExperimento from '@/components/experimento/Adicionar.vue'
import IndexExperimento from '@/components/experimento/Index.vue'

import AdicionarTratamento from '@/components/tratamento/Adicionar.vue'
import IndexTratamento from '@/components/tratamento/Index.vue'
import Detalhe from '@/components/tratamento/Detalhes.vue'


let pageExperimento = {
  path: '/experimentos',
  component: ContentLayout,
  redirect: '',
  children: [
    {
      path:'',
      name:'Consulta Experimento',
      component:IndexExperimento
    },
    {
      path:'/experimentos/novo',
      name:'Adicionar Experimento',
      component:AdicionarExperimento
    }
  ]
}
let pageTratamento = {
  path: '/tratamentos',
  component: ContentLayout,
  redirect: '',
  children: [
    {
      path: '',
      name: 'Consulta Tratamento',
      component: IndexTratamento
    },
    {
      path: '/tratamentos/novo',
      name: 'Adicionar Tratamento',
      component: AdicionarTratamento
    },
    {
      path: '/tratamentos/:id',
      name: 'Detalhes Tratamento',
      component: Detalhe
    }
  ]
}

const router = [
  pageTratamento,
  pageExperimento,
  {
    path: '/',
    name: 'ContentLayout',
    component: ContentLayout,
    redirect: '',
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      }
    ]
  },
  {path: '*', component: NaoEncontrado}
]

export default router
