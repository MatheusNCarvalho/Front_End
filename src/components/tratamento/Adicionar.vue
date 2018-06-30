<template>
  <from-base :title="this.$route.name" @salvar="onSalvar" :voltarPagina="'/tratamentos'" @limpar="onLimpar">
    <v-flex xs12 md6>
      <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                    :counter="255" v-model="title" label="Nome Tratamento">
      </v-text-field>
    </v-flex>
  </from-base>

</template>
<script>
  import FromBase from '@/components/formulario/FormBase.vue'

  export default {
    name: 'AdicionarTratamento',
    components: {
      FromBase
    },
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      onSalvar() {
       // this.$TratamentoService.Get("/tratamento",{})
      },
      onLimpar() {
        this.title = ''
      }
    }
  }
</script>
