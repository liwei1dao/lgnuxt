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
                        ref="email"
                        :rules="emailRules"
                        :label="$t('E-mail')"
                        required></v-text-field>
          <v-text-field v-model="password"
                        :rules="passwordRules"
                        :counter="10"
                        :label="$t('Password')"
                        :append-icon="passwordeye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordeye ? 'text' : 'password'"
                        required
                        @click:append="passwordeye = !passwordeye"></v-text-field>
          <v-text-field v-model="confirmpassword"
                        :rules="confirmpasswordRules"
                        :counter="10"
                        :label="$t('Confirmpassword')"
                        :append-icon="passwordeye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordeye ? 'text' : 'password'"
                        required
                        @click:append="passwordeye = !passwordeye"></v-text-field>
          <v-text-field v-model="captcha"
                        :rules="captchaRules"
                        :counter="4"
                        required>
            <template v-slot:append>
              <v-btn color="primary text-capitalize"
                     width="120"
                     :disabled="captchaDisabled"
                     @click="getcaptcha"
                     depressed>{{captchabuttstr}}</v-btn>
            </template>
          </v-text-field>
          <v-btn class="mr-4 text-capitalize"
                 color="warning"
                 @click="registerbycaptcha"
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
      // ,
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
    captchabuttstr () {
      if (this.captchatimer) {
        return this.captchaLiftTime
      }
      return this.$t('GetCaptcha')
    }
  },
  methods: {
    getcaptcha () {
      if (!this.$refs.email.validate()) {
        this.$message.error("E-mail must be valid")
        return
      }
      this.captchaDisabled = true
      this.$sendemailcaptcha({ PhonOrEmail: this.email, CaptchaType: 0 }).then(response => {
        const { message } = response
        this.$message.success(message)
        if (!this.captchatimer) {//启动计时器
          this.captchatimer = setInterval(() => {
            if (this.captchaLiftTime > 0 && this.captchaLiftTime <= 60) {
              this.captchaLiftTime--;
              if (this.captchaLiftTime == 0) {
                clearInterval(this.captchatimer);
                this.captchaLiftTime = 60;
                this.captchatimer = null;
                this.captchaDisabled = false;
              }
            }
          }, 1000)
        }
      }).catch(error => {
        this.$message.error(error.message)
        this.captchaDisabled = false
        this.captchaLiftTime = 60
      })
    },
    registerbycaptcha () {
      if (this.$refs.form.validate()) {
        this.$registerbycaptcha({ PhonOrEmail: this.email, Password: this.password, Captcha: this.captcha }).then(response => {
          const { message } = response
          this.$message.success(message)
        }).catch(error => {
          this.$message.error(error.message)
        })
      }
    }
  }
}
</script>

<style>
</style>