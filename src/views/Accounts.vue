<template>
  <Scaffold>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Accounts</v-card-title>
            <v-card-text>Hello World!</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Scaffold>
</template>

<script>
  import Scaffold from "@/components/Scaffold.vue";
  export default {
    name: 'Accounts',
    components: {Scaffold},
  }
</script>