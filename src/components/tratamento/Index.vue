<template>
  <from-base :title="this.$route.name" :linkNovoRegistro="'/tratamentos/novo'" @salvar="onSalvar" @limpar="onLimpar">
    <template slot="container">
      <v-flex xs12 md5>
        <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                      :counter="255" v-model="title" label="Nome Tratamento">
        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 md5>
        <v-dialog ref="dialog" v-model="modal"
                  :return-value.sync="dateFormatted" persistent lazy full-width width="290px">
          <v-text-field slot="activator" v-model="date" label="Data Criação"
                        prepend-icon="event" readonly>
          </v-text-field>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
    </template>
    <template slot="tabela">
      <index-partial></index-partial>
    </template>


  </from-base>

</template>
<script>
  import FromBase from '@/components/formulario/FormConsulta.vue'
  import IndexPartial from './IndexPartial.vue'

  export default {
    name: 'IndexTratamento',
    components: {
      FromBase,
      IndexPartial
    },
    data() {
      return {
        title: '',
        description: '',
        date: null,
        dateFormatted: null,
        modal: false,
      }
    },
    methods: {
      onSalvar() {
        alert(this.title)
      },
      onLimpar() {
        this.title = ''
      },
      consultar(){
        this.$TratamentoService.Get("/tratamento",{})
      }
    },

  }
</script>
