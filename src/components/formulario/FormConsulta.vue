<template>
  <v-container grid-list-xl grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-card>
          <v-card-title>
            <v-flex xs7 md3>
              <h2 class="title mb-0" v-show="title">{{title}}</h2>
            </v-flex>
            <v-spacer/>
            <v-flex xs5 md3>
              <h2 class="title mb-0" @click="onLink(linkNovoRegistro)">
                Novo Registro
                <v-btn icon @click="onLink(voltarPagina)">
                  <v-icon>arrow_forward</v-icon>
                </v-btn>
              </h2>
            </v-flex>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <slot name="container"></slot>
                <v-flex xs12 md12>
                  <v-btn color="success" @click="onConsultar">Consultar</v-btn>
                  <v-btn color="secondary" @click="onLimpar">Limpar</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12>
        <v-card>

          <v-card-text>
            <slot name="tabela"></slot>
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>

</template>
<script>
  export default {
    name: 'FormBase',
    props: ['title', 'linkNovoRegistro'],
    data() {
      return {}
    },
    methods: {
      onLimpar() {
        this.$emit('limpar')
      },
      onConsultar() {
        this.$emit('consultar')
      },
      onLink(obj) {
        this.$router.push({path: obj})
      }
    }

  }
</script>
