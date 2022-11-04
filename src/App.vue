<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Notifications', icon: 'mdi-bell', to: '/notifications' },
          { title: 'Users', icon: 'mdi-account-group', to: '/users' },
          { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
      ],
  }),
};
</script>
