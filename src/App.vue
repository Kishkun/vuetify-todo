<template>
  <v-app>
    <Sitebar v-model="drawer"/>
    <Navbar v-model="drawer"/>
    <v-container fluid class="grey lighten-4 px-4">
    
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-app>
</template>
<script>
  import Navbar from "./components/Navbar";
  import Sitebar from "./components/Sitebar";

export default {
  name: "App",
  components: {
    Navbar,
    Sitebar
  },
  data: () => ({
    drawer: false
  }),
  methods: {

  }
};
</script>
