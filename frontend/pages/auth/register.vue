<template>
  <v-row justify="center" align="center">
    <v-col lg="5" md="8" sm="8">
      <v-card style="margin-top: 15%">
        <v-card-title class="text-uppercase red" color="white">
          <span class="text-h6 white--text text-center">SIGN UP HERE</span>
        </v-card-title>
        <v-card-text class="mt-6">
          <v-form>
            <v-text-field
              v-model="registerModel.first_name"
              label="First Name"
              color="error"
              type="text"
              required
            ></v-text-field>

            <v-text-field
              v-model="registerModel.last_name"
              label="Last Name"
              color="error"
              type="text"
              required
            ></v-text-field>

            <v-text-field
              v-model="registerModel.email"
              label="Email"
              color="error"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              v-model="registerModel.password"
              label="Password"
              color="error"
              type="password"
              required
            ></v-text-field>

            <v-btn color="error" class="mt-4 mb-5" block>
              Create Account
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-row class="mt-2">
        <v-col lg="6" class="text-left">
          <v-btn color="error">Login Here</v-btn>
        </v-col>
        <v-col lg="6" class="text-right">
          <v-btn color="error">Forgot Password</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      registerModel: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {

  },
};
</script>
