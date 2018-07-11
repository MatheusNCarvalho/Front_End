<template>
  <from-base :title="this.$route.name" @salvar="onSalvar" :nomeBotao="'Salvar'" :voltarPagina="'/experimentos'"
             @limpar="onLimpar">
    <v-flex xs12 md6>
      <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                    :counter="255" v-model="form.nome" label="Nome Tratamento">
      </v-text-field>
    </v-flex>
    <v-flex xs12 md6>
      <v-text-field data-vv-name="form.qtd" v-model="form.qtd" label="Qtd Repetições">
      </v-text-field>
    </v-flex>

    <v-flex xs6 md5>
      <v-autocomplete :disabled="false" :items="states" :filter="customFilter"
                      item-text="label" label="Tratamento"></v-autocomplete>
    </v-flex>
    <v-flex xs1 md1>
      <v-btn fab dark color="primary">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-flex>

  </from-base>

</template>
<script>
  import FromBase from '@/components/formulario/FormBase.vue'

  export default {
    name: 'AdicionarExperimento',
    components: {
      FromBase
    },
    data() {
      return {
        form: {
          nome: '',
          qtd: null,
        },
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
      onSalvar() {
        this.Save(this.form)
        //this.$router.push({path: '/tratamentos'})
      },
      onLimpar() {
        this.form.nome = ''
      },

      customFilter(item, queryText, itemText) {
        const textOne = item.label.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1

      }
    }
  }
</script>
