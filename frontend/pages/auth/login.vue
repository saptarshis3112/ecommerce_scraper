<template>
  <v-row justify="center" align="center">
    <v-col lg="5" md="8" sm="8">
      <v-card style="margin-top: 30%">
        <v-card-title class="text-uppercase red" color="white">
          <span class="text-h6 white--text text-center">SIGN IN HERE</span>
        </v-card-title>
        <v-card-text class="mt-6">
          <v-form>
            <v-text-field
              v-model="loginModel.email"
              label="Email"
              color="error"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              v-model="loginModel.password"
              label="Password"
              color="error"
              type="password"
              required
            ></v-text-field>
            <v-btn color="error" class="mt-4 mb-5" block> Login </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-row class="mt-2">
        <v-col lg="6" class="text-left">
          <v-btn color="error">Register Here</v-btn>
        </v-col>
        <v-col lg="6" class="text-right">
          <v-btn color="error">Verify Account</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      loginModel: {
        email: "",
        password: "",
      },
    };
  },
  methods: {

  },
};
</script>
