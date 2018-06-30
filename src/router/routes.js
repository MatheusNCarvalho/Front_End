import ContentLayout from '../components/dashboard/Content.vue'
import Home from '../components/Pessoa.vue'
import NaoEncontrado from '../components/erros/NaoEncontrado.vue'

import AdicionarExperimento from '@/components/experimento/Adicionar.vue'

import AdicionarTratamento from '@/components/tratamento/Adicionar.vue'
import IndexTratamento from '@/components/tratamento/Index.vue'

let pageTratamento ={
    path:'/tratamentos',   
    component:ContentLayout,
    redirect:'',
    children:[
        {
            path:'',
            name:'Consulta Tratamento',
            component:IndexTratamento
        },
        {
            path:'/tratamentos/novo',
            name:'Adicionar Tratamento',
            component:AdicionarTratamento
        }
    ]
}

const routes =[
    pageTratamento,

    {
        path:'/',
        name:'ContentLayout',
        component:ContentLayout,
        redirect:'/home',
        children:[
            {
                name:'home',
                path:'home',
                component: AdicionarExperimento
            }
        ]
    },
    {path:'*', component: NaoEncontrado}
]

export default routes