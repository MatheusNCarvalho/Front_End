<template>
  <v-app>
     <transition name="fade" mode="out-in">
       <router-view/>
     </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

};
</script>
