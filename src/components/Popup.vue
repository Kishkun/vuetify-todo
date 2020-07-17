<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          ADD NEW PROJECT
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Privacy Policy</h2>
        </v-card-title>
        <v-card-text>
          <v-form
              ref="form"
              @submit.prevent="submitHandler"
              class="px-3"
          >
            <v-text-field
                label="Title..."
                v-model="title"
                prepend-icon="mdi-folder"
                :rules="inputRules"
            ></v-text-field>
            <v-textarea
                label="Information..."
                v-model="info"
                prepend-icon="mdi-pencil"
                :rules="inputRules"
            ></v-textarea>
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="10"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="computedDateFormatted"
                    label="Due data"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
            </v-menu>
            <v-btn
                class="success mx-0 mt-3"
                type="submit"
                :loading="loading"
                :disabled="loading"
            >Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import db from "@/fb"
  
  export default {
    name: "Popup",
    data: () => ({
      dialog: false,
      title: "",
      info: "",
      menu: false,
      date: new Date().toISOString().substr(0, 10),
      inputRules: [
        v => !!v || 'Title is required',
        v => (v && v.length >= 5) || 'Title must be minimum 5 characters',
      ],
      loading: false,
      loader: null,
    }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    methods: {
      submitHandler() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          const project = {
            title: this.title,
            content: this.info,
            person: "Test vuetify",
            status: "complete",
            due: this.computedDateFormatted
          };
          
          db.collection("projects")
            .add(project)
            .then(() => {
              this.dialog = false;
              this.title = "";
              this.info = "";
              this.$refs.form.resetValidation();
              this.loading = false;
              this.$emit("changeSnackbar");
            })
          .catch(error => {
            console.error(error)
          });
        }
      },
      formatDate (date) {
        if (!date) return null;

        const [year, month, day] = date.split('-');
        return `${month}/${day}/${year}`
      }
    }
  }
</script>