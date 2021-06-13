<template>
  <v-menu offset-y
          transition="scroll-x-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-large
             v-bind="attrs"
             v-on="on"
             tile
             rounded
             text>
        <v-avatar>
          <img :class="flagIconClass($store.state.locale,true)">
        </v-avatar>
      </v-btn>
    </template>
    <v-card width="240px">
      <v-card-title class="text--center">{{$t('SelectLanguage')}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item,index) in languge"
                       :key="index"
                       link
                       @click="selectlanguge(item.lang)">
            <v-list-item-avatar :class="flagIconClass(item.lang,true)"></v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import "flag-icon-css/css/flag-icon.css"
import relation from "./relation"
export default {
  name: "SelectLanguge",
  components: {
  },
  data () {
    return {
      languge: [
        { lang: 'zh', text: "中文" },
        { lang: 'en', text: "English" },
      ],
    }
  },
  methods: {
    flagIconClass: function (lang, squared) {
      return (
        (squared ? "flag-icon-squared " : "") +
        "flag-icon-" +
        relation[lang.toLowerCase()]
      );
    },
    selectlanguge: function (lang) {
      console.log(this.$i18n.fallbackLocale)
      console.log(lang)
      console.log(this.$i18n.locale)
      console.log(this.$route.fullPath)
      if (lang != this.$i18n.locale) {

      }
    }
  }
}
</script>
<style>
</style>