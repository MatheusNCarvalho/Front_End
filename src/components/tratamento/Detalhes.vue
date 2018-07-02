<template>
  <from-base :title="this.$route.name" @salvar="onSalvar" :nomeBotao="'Atualizar'" :voltarPagina="'/tratamentos'" @limpar="onLimpar">
    <v-flex xs12 md6>
      <v-text-field :rules="[(v) => v.length <= 255 || '255 caracaters maximo']"
                    :counter="255" v-model="form.nome" label="Nome Tratamento">
      </v-text-field>
    </v-flex>
  </from-base>

</template>
<script>
  import FromBase from '@/components/formulario/FormBase.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'DetalheTratamento',
    components: {
      FromBase
    },
    data() {
      return {
        form: {
          nome:'',
          id:''
        }
      }
    },
    mounted() {
      this.onMontarObjeto()
    },
    computed: {
      ...mapGetters({
        GetTratamento: 'Tratamento/getTratamento'
      })
    },

    watch:{
      GetTratamento: function (obj) {
          this.form = obj
      }
    },
    methods: {
      onMontarObjeto() {
        this.GetById(this.$route.params)
      },
      onSalvar() {
        this.Update(this.form)
        //this.$router.push({path: '/tratamentos'})
      },
      onLimpar() {
        this.form.nome = ''
      },
      ...mapActions('Tratamento', ['Update', 'GetById'])
    }
  }
</script>
