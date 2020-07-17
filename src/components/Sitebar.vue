<template>
<nav>
  <v-snackbar
      v-model="snackbar"
      top
      color="success"
      class="white--text"
  >
    Awesome! You added a new project
    <template v-slot:action="{ attrs }">
      <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-navigation-drawer
      app
      class="primary"
      v-model="show"
  >
    <v-row class="flex-column" align="center">
      <v-flex class="mt-5">
        <v-avatar size="100">
          <img src="/avatar/avatar-1.png" alt="The Net Ninja">
        </v-avatar>
        <p class="white--text mt-1">The Net Ninja</p>
      </v-flex>
      <v-flex class="mt-4 mb-3">
        <Popup @changeSnackbar="snackbar = !snackbar" />
      </v-flex>
    </v-row>
    <v-list>
      <v-list-item
          v-for="(link, i) in links"
          :key="i"
          link
          :to="link.route"
      >
        <v-list-item-icon>
          <v-icon color="white">{{link.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text"
          >{{link.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>
<script>
  import Popup from "./Popup";
  export default {
    name: "Sitebar",
    components: {
      Popup
    },
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
      snackbar: false,
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