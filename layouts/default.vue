<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer"
                         :mini-variant="miniVariant"
                         :clipped="clipped"
                         fixed
                         app>
      <navigation :routers="routers"></navigation>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped"
               fixed
               app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon
             @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon
             @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon
             @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <select-languge></select-languge>
      <v-btn icon
             @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer"
                         :right="right"
                         temporary
                         fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed"
              app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/navigation/"
import SelectLanguge from "@/components/selectlanguge/"
export default {
  components: {
    Navigation,
    SelectLanguge
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      routers: [
        {
          title: 'Console', icon: 'mdi-console', to: '/console',
          children: [
            {
              title: 'Project', icon: 'mdi-card-text', to: '/console/project',
            },
            {
              title: 'Host', icon: 'mdi-laptop', to: '/console/host',
            },
            {
              title: 'Cluster', icon: 'mdi-server-network', to: '/console/cluster',
            },
          ]
        },
        {
          title: 'Components', icon: 'mdi-video-input-component', to: '/components',
          children: [
            {
              title: 'MessageComponent', icon: 'mdi-card-text', to: '/components/message',
            },
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
