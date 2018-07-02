<template>

  <div>
    <v-data-table :headers="headers" :items="TratamentoList" hide-actions>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.nome }}</td>
        <td class="justify-center layout px-0">

          <router-link style="text-decoration:none" :to="{ name: 'Detalhes Tratamento', params: { id: props.item.id }}">
            <v-btn icon class="mx-0">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
          </router-link>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <span>Nenhum registro encontrado!</span>
      </template>
    </v-data-table>
  </div>

</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    // props:{
    //   tratamentoList:{
    //     type: Array,
    //     default: function () {
    //       return [];
    //     }
    //   }
    // },
    data: () => ({
      headers: [
        {
          text: 'Nome',
          align: 'left',
          value: 'name'
        },
        {text: 'Actions', value: 'name', sortable: false}
      ],

    }),

    computed: {
      ...mapGetters({
        TratamentoList: 'Tratamento/getTratamentoList'
      })
    },

    watch: {
      // tratamentoList: function (obj) {
      //   this.itens = obj
      // }
    },

    methods: {

      editItem(item) {
        // this.editedIndex = this.tratamentoList.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        // this.dialog = true
      },

      deleteItem(item) {
        this.$swal({
          title: "Confirma a exclusão do item ?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Sim, delete!",
          cancelButtonText: "Não, cancele!"
        }).then(isConfirm => {
          if (isConfirm.value) {
            this.Delete(item)
          }
        })
      },
      ...mapActions('Tratamento', ['Delete'])
    }
  }
</script>
