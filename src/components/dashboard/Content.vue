<template>
  <v-app>
    <top-nav-bar></top-nav-bar>

    <v-dialog v-model="GetLoading" persistent max-width="190">
      <v-card height="160">
        <v-card-text>
          <v-progress-circular :size="120" :width="8" color="purple" indeterminate>
          </v-progress-circular>
          <br/>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-content class="grey lighten-2">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>

    <v-footer app>
      <v-container fluid grid-list-md>
        <span>IF Goiano Campus Morrinhos &copy; 2018</span>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script>

  import TopNavBar from './TopNavBar.vue'
  import Footer from './ContentFooter.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Content',
    data() {
      return {
        isLoading: true,
        dialog: false
      }
    },
    components: {
      TopNavBar,
      Footer
    },
    computed: {
      ...mapGetters({
        GetLoading: 'Loading/getLoading'
      })
    }

  }
</script>

<style>
</style>
