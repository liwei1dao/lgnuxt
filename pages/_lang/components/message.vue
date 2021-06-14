<template>
  <v-card>
      <v-card-title>
        Message 演示
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-btn class="ma-2"
               color="success"
               @click="showmessage_succ">
          Success
        </v-btn>
        <v-btn class="ma-2"
               color="alert"
               @click="showmessage_alert">
          Alert
        </v-btn>
        <v-btn class="ma-2"
               color="error"
               @click="showmessage_error">
          Error
        </v-btn>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    showmessage_succ () {
      console.log(this.$message)
      this.$message.success("Success")
    },
    showmessage_alert () {
      this.$message.alert("Alert")
    },
    showmessage_error () {
      this.$message.error("Error")
    },
  }
}
</script>

<style>
</style>