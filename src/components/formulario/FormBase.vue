<template>
  <v-container grid-list-xl grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-card>
          <v-card-title>
            <v-btn icon @click="onLink(voltarPagina)">
              <v-icon>reply</v-icon>
            </v-btn>
            <h2 class="title mb-0" v-show="title">{{title}}</h2>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <slot></slot>
                <v-flex xs12 md12>
                  <v-btn color="success" @click="onSalvar">Salvar</v-btn>
                  <v-btn color="secondary" @click="onLimpar">Limpar</v-btn>
                </v-flex>

              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'FormBase',
    props: ['title', 'voltarPagina'],
    data() {
      return {
        dialog: false,

      }
    },
    methods: {
      onLimpar() {
        this.$emit('limpar')
      },
      onSalvar() {
        this.$emit('salvar')
      },
      onLink(link) {
        this.$router.push({path: link})
      }
    }

  }
</script>
<style scoped>

</style>
