<template>
  <div>
    <v-navigation-drawer
        v-model="navigationDrawer.isCollapsed"
        app
        class="m3-nav-drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
          <v-list-item-subtitle>
            TODO
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in navigationDrawer.items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      class=""
    >
      <v-app-bar-nav-icon @click="navigationDrawer.isCollapsed = !navigationDrawer.isCollapsed"></v-app-bar-nav-icon>

      <v-toolbar-title><b>Irgendwo im Internet</b> | Discord Community</v-toolbar-title>
    </v-app-bar>

    <v-main class="">
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  data: () => ({
    navigationDrawer: {
      isCollapsed: true,
      items: [
        { title: "Notifications", icon: "mdi-forum", to: "/" },
        { title: "Cronjobs", icon: "mdi-forum", to: "/cronjobs" },
        { title: "Accounts", icon: "mdi-forum", to: "/accounts" }
      ]
    }
  }),
}
</script>
