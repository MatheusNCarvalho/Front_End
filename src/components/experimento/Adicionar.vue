<template>
    <from-base title="Novo Experimento">
           <v-flex xs12>
                <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                    :counter="255" v-model="title" label="Nome Tratamento">
                </v-text-field>
            </v-flex>          
    </from-base>

</template>
<script>
import FromBase from '@/components/formulario/FormBase.vue'
export default {
    name:'AdicionarExperimento',
    components:{
        FromBase
    },
    data(){
        return{
             title: '',
            description: ''
        }
    },
    mounted:{
             
    }
}
</script>
