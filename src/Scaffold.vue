<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        dark
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
            v-for="item in items"
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

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><b>Irgendwo im Internet</b> | Discord Community</v-toolbar-title>
    </v-app-bar>

    <v-main class="background-black">
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  data: () => ({}),
}
</script>

<style>
.background-black {
  background: black;
}
</style>
