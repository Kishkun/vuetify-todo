<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
        class="grey--text"
        @click.stop="show = !show"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Todo</span>
      <span>Vuetify</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!--    dropdown-menu-->
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="grey lighten-4"
            dark
            v-bind="attrs"
            v-on="on"
            class="mr-4"
        >
          <v-icon color="grey" left>mdi-chevron-down</v-icon>
          <span class="grey--text">Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            v-for="(link, i) in links"
            :key="i"
            link
            :to="link.route"
        >
          <v-list-item-icon>
            <v-icon color="grey">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="grey--text">
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn color="grey lighten-4">
      <span class="grey--text">Sign out</span>
      <v-icon right color="grey">mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
  export default {
    name: "Navbar",
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      links: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/"
        },
        {
          title: "My projects",
          icon: "mdi-folder",
          route: "/projects"
        },
        {
          title: "Team",
          icon: "mdi-account",
          route: "/team"
        },
      ],
    }),
    computed: {
      show: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit("input", value)
        }
      },
    }
  }
</script>