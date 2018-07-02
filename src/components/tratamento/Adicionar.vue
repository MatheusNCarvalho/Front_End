<template>
  <from-base :title="this.$route.name" @salvar="onSalvar" :nomeBotao="'Salvar'" :voltarPagina="'/tratamentos'" @limpar="onLimpar">
    <v-flex xs12 md6>
      <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                    :counter="255" v-model="form.nome" label="Nome Tratamento">
      </v-text-field>
    </v-flex>
  </from-base>

</template>
<script>
  import FromBase from '@/components/formulario/FormBase.vue'
  import {mapActions} from 'vuex'
  export default {
    name: 'AdicionarTratamento',
    components: {
      FromBase
    },
    data() {
      return {
        form: {
          nome: ''
        }
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
      ...mapActions('Tratamento',['Save'])
    }
  }
</script>
