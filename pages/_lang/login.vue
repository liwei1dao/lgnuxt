<template>
  <v-container class="d-flex justify-center fill-height mt-6">
    <v-card min-width="450px"
            class="float-none">
      <v-toolbar flat>
        <v-toolbar-title>{{$t('Login')}}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="form"
                v-model="valid"
                lazy-validation>
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
                 :disabled="!valid"
                 @click="loginhandle"
                 :loading="loading"
                 depressed
                 block>
            {{$t('Login')}}
          </v-btn>
          <v-btn class="mt-4 text-capitalize"
                 color="grey lighten-1"
                 to="/register"
                 block>
            {{$t('Register')}}
          </v-btn>
        </v-form>
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
      valid: true,
      loading: false,
    }
  },

  methods: {
    loginhandle () {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$loginbypassword({ PhonOrEmail: this.email, Password: this.password }).then(response => {
          const { message, data } = response
          this.$message.success(message)
          this.$cookies.set('User-Token', data.Token)
          this.$store.commit('Set_user', data)
          this.loading = false
          this.$router.push({ path: '/' })
        }).catch(error => {
          this.loading = false
          this.$message.error(error.message)
        })
      }
    }
  }
}
</script>
