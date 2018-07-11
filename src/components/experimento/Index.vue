<template>
  <from-base :title="this.$route.name" :linkNovoRegistro="'/experimentos/novo'" @consultar="onConsultar"
             @limpar="onLimpar">
    <template slot="container">
      <v-flex xs12 md5>
        <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                      :counter="255" v-model="title" label="Nome Experimento">
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

      <v-flex xs12 md5>
        <v-autocomplete :disabled="false" :items="states" :filter="customFilter"
                        item-text="label" label="Consulta Status"></v-autocomplete>
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
  import {mapActions} from 'vuex'

  export default {
    name: 'IndexExperimento',
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
        states: [
          {
            id: 0,
            label: 'Aberto'
          },
          {
            id: 1,
            label: 'Em Andamento'
          },
          {
            id: 2,
            label: 'Concluido'
          },
          {
            id: 3,
            label: 'Cancelado'
          }
        ]
      }
    },
    methods: {
      onConsultar() {
        this.Get()
      },
      onLimpar() {
        this.title = ''
      },
      customFilter(item, queryText, itemText) {
        const textOne = item.label.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1

      },
      ...mapActions('Tratamento', ['Get'])
    },

  }
</script>
