<template>
  <v-main>
    <v-subheader class="grey--text pa-0">Team</v-subheader>
    <v-container class="my-5">
      <v-row>
        <v-flex xs12 sm6 md4 lg3
                v-for="(person, i) in teams"
                :key="i"
                class="grey lighten-4"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img
                    :src="person.avatar"
                    :alt="person.name"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text class="subtitle-2">
              <div class="display-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text>
                <v-icon color="grey" small left>mdi-message-text-outline</v-icon>
                <span class="grey--text">message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
  export default {
    name: "Team",
    data: () => ({
      teams: [
        {name: "The Net Ninja", role: "Web developer", avatar: "/avatar/avatar-1.png"},
        {name: "Ryu", role: "Graphic designer", avatar: "/avatar/avatar-2.png"},
        {name: "Chun Li", role: "Web developer", avatar: "/avatar/avatar-3.png"},
        {name: "Gouken", role: "Social media maverick", avatar: "/avatar/avatar-4.png"},
        {name: "Yoshi", role: "Sales guru", avatar: "/avatar/avatar-5.png"}
      ]
    })
  }
</script>