<template>
  <v-main :class="{'background': !$vuetify.breakpoint.xs, 'background-small': $vuetify.breakpoint.xs}">
    <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md6 lg3>
                  <v-card class="pa-2 form-sheet">
                     <v-card-title>Login</v-card-title>
                     <v-card-text>
                     <form ref="form">
                            <v-text-field
                              v-model="username"
                              class="form-login-text-field mb-4"
                              name="email"
                              label="E-Mail"
                              type="email"
                              hide-details="true"
                              outlined
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              class="form-login-text-field mb-2"
                              name="password"
                              label="Password"
                              type="password"
                              hide-details="true" 
                              outlined
                           ></v-text-field>
                           <v-col class="forget-password-text">Forgot password?</v-col>
                           <div class="red--text"> {{errorMessage}}</div>
                      </form>
                      <v-col class="pa-0 ma-0 mt-4"></v-col>
                      <v-col class="pa-0 ma-0 mt-6 mb-4">
                            <v-btn type="submit" class="form-login-button primary" value="log in" rounded block large>Login</v-btn>
                      </v-col>
                      
                      <div class="seperator mt-6">or</div>

                      <v-col class="pa-0 ma-0 mt-6">
                            <v-btn type="submit" class="form-login-button-discord" value="log in" rounded block large>
                              <v-icon left light>$discord</v-icon>
                              Login with Discord
                            </v-btn>
                      </v-col>
                     </v-card-text>
                  </v-card>
                
               </v-flex>
            </v-layout>
         </v-container>
  </v-main>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    username: "",
    password: "",
    errorMessage: "",
  }),
}
</script>

<style scoped>

.seperator {
  display: flex;
  align-items: center;
}

.seperator::before {
  content: "";
  display: block;
  width: 100%;
  height: 0.0620rem;
  margin-right: 0.75rem;
  background-color: #5b5b5b;
}

.seperator::after {
  content: "";
  display: block;
  width: 100%;
  height: 0.0620rem;
  margin-left: 0.75rem;
  background-color: #5b5b5b;
}

.forget-password-text {
  margin: 0;
  padding: 0;
  margin-left: 2px;
  text-decoration-line: underline;
}
</style>
