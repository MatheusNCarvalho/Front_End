<template>
  <section>
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-layout row wrap>
        <v-flex lg12>
          <v-container class="text-xs-center">
            <img src="static/white-background-404-404-not-found.jpg" alt="logo" style="width: 200px">
          </v-container>
        </v-flex>
      </v-layout>

      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>

          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text"
                        :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <!--Parte do Grupo -->
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
                <!--End -->
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children"
                         :key="i" @click="">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title @click="onLink">
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-divider v-else-if="item.divider" :key="item.divider"></v-divider>

          <v-list-tile v-else @click="" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click="onLink(item.link)">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="blue" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">IF Experimentos</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon large>
        <v-avatar>
          <img  src="https://vuetifyjs.com/doc-images/john.jpg" alt="John">
        </v-avatar>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

    </v-toolbar>

  </section>
</template>
<script>
  export default {
    name: "TopNavBar",
    data() {
      return {
        drawer: null,
        items: [
          {icon: 'find_replace', text: 'Tratamento', link: '/tratamentos'},
          {divider: true},
          {icon: 'find_replace', text: 'Experimento', link: '/'}
          //{ icon: 'content_copy', text: 'Duplicates' },
          /* {
               icon: 'keyboard_arrow_up',
               'icon-alt': 'keyboard_arrow_down',
               text: 'Labels',
               model: true,
               children: [
                   { icon: 'add', text: 'Create label' }
               ]
           },
           {
               icon: 'keyboard_arrow_up',
               'icon-alt': 'keyboard_arrow_down',
               text: 'More',
               model: false,
               children: [
                   { text: 'Import' },
                   { text: 'Export' },
                   { text: 'Print' },
                   { text: 'Undo changes' },
                   { text: 'Other contacts' }
               ]
           },
           { icon: 'settings', text: 'Settings' },
           { icon: 'chat_bubble', text: 'Send feedback' },
           { icon: 'help', text: 'Help' },
           { icon: 'phonelink', text: 'App downloads' },
           { icon: 'keyboard', text: 'Go to the old version' }*/
        ]
      }
    },
    methods: {
      onLink(link) {
        this.$router.push({path: link})
      }
    }
  };
</script>
