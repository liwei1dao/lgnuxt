<template>
  <v-container class="d-flex justify-center fill-height mt-6">
    <v-card min-width="450px"
            class="float-none">
      <v-toolbar flat>
        <v-toolbar-title>{{$t('Login')}}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <form>
          <v-text-field v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required></v-text-field>
          <v-text-field v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required></v-text-field>
          <v-btn class="mr-4 text-capitalize"
                 color="warning"
                 @click="loginbypassword"
                 block>
            {{$t('Login')}}
          </v-btn>
          <v-btn class="mt-4 text-capitalize"
                 color="grey lighten-1"
                 to="/register"
                 block>
            {{$t('Register')}}
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'blank',
  data: () => {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.email = ''
      this.password = ''
    },
    loginbypassword () {
      this.$v.$touch()
    }
  }
}
</script>
