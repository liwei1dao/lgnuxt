<template>
  <v-container class="d-flex justify-center fill-height mt-6">
    <v-card min-width="450px"
            class="float-none">
      <v-toolbar flat>
        <v-toolbar-title>{{$t('Register')}}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="form"
                lazy-validation>
          <v-text-field v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required></v-text-field>
          <v-text-field v-model="password"
                        :rules="passwordRules"
                        :counter="10"
                        label="Password"
                        :append-icon="passwordeye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordeye ? 'text' : 'password'"
                        required
                        @click:append="passwordeye = !passwordeye"></v-text-field>
          <v-text-field v-model="confirmpassword"
                        :rules="confirmpasswordRules"
                        :counter="10"
                        label="Confirmpassword"
                        :append-icon="passwordeye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordeye ? 'text' : 'password'"
                        required
                        @click:append="passwordeye = !passwordeye"></v-text-field>
          <v-text-field v-model="captcha"
                        :rules="captchaRules"
                        :counter="4"
                        label="Captcha"
                        required>
            <template v-slot:append>
              <v-btn color="primary text-capitalize"
                     @click="getcaptcha"
                     dark>{{$t('Captcha')}}</v-btn>
            </template>
          </v-text-field>
          <v-btn class="mr-4 text-capitalize"
                 color="warning"
                 block>
            {{$t('Register')}}
          </v-btn>
          <v-btn class="mt-4 text-capitalize"
                 color="grey lighten-1"
                 to="/login"
                 block>
            {{$t('Login')}}
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
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: "",
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be less than 10 characters',
      ],
      confirmpassword: "",
      captcha: "",
      captchaRules: [
        v => !!v || 'Password is required',
        v => (v && v.length == 4) || 'Captcha must be less than 4 characters',
      ],
      passwordeye: false,
      captchaDisabled: false,
      captchatimer: null,
      captchaLiftTime: 60,
    }
  },
  computed: {
    confirmpasswordRules () {
      return [
        (v) => !!v || 'Senha não informada',
        (v) => (v && v.length >= 8) || 'A senha deve ter no mínimo 8 caracteres',
        (v) => (v === this.password) || 'Senhas diferentes!',
      ];
    },
  },
  methods: {
    getcaptcha () {
      this.$sendemailcaptcha({ PhonOrEmail: this.phonoremail, CaptchaType: 0 })
    },
  }
}
</script>

<style>
</style>