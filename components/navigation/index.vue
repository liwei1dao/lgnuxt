<template>
  <v-list dense
          v-model="selectedItem">
    <template v-for="(router,i) in routers">
      <template v-if="router.children && router.children.length > 0">
        <v-list-group :key="i"
                      :prepend-icon="router.icon">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="router.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(child,n) in router.children"
                       :key="n"
                       :to="child.to"
                       link
                       class="pl-8">
            <v-list-item-icon>
              <v-icon v-text="child.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
      <template v-else>
        <v-list-item :key="i"
                     :to="router.to"
                     link>
          <v-list-item-icon>
            <v-icon v-text="router.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="router.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    routers: {
      type: Array,
      default: function () {
        return [
          {
            title: 'Console', icon: 'mdi-console', to: '/console',
            children: [
              {
                title: 'ProjjectInfo', icon: 'mdi-card-text', to: '/console/',
              },
              {
                title: 'HostInfo', icon: 'mdi-laptop', to: '/console/hostInfo',
              },
              {
                title: 'ClusterInfo', icon: 'mdi-server-network', to: '/console/clusterInfo',
              },
            ]
          },
          {
            title: 'Components', icon: 'mdi-video-input-component', to: '/components',
          }
        ]
      }
    }
  },
  data () {
    return {
      selectedItem: 1,
    }
  },
}
</script>

<style>
</style>