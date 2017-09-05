<template>
  <v-app light>
    <v-layout>
      <v-flex xs12>
          <v-navigation-drawer
                  temporary
                  v-model="drawer">
            <v-list>
              <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
              v-if="userIsAuthenticated"
              @click="onLogout">
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>Se déconnecter</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>

          <v-toolbar dark class="success"  style="padding-left: 50px" dense>
            <div class="hidden-sm-and-up">
              <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            </div>
            <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer;">DevSosHealth</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
              <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
                <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-btn>
              <v-btn
                      v-if="userIsAuthenticated"
                      flat
                      @click="onLogout">
                <v-icon left dark>exit_to_app</v-icon>
                Se déconnecter

              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        <main>
          <router-view></router-view>
        </main>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
      data () {
      return {
          drawer: false
      }
    },
      computed: {
          menuItems () {
              let menuItems = [
                  {icon: 'face', title: 'S\'inscrire', link: '/signup'},
                  {icon: 'lock_open', title: 'se connecter', link: '/signin'}
              ];
              if (this.userIsAuthenticated) {
                  menuItems = [
                      {icon: 'supervisor_account', title: 'Patients', link: '/patients'},
                      {icon: 'person_add', title: 'Nouveau Patient', link: '/nouveauPatient'}
                  ]
              }
              return menuItems
          },
          userIsAuthenticated () {
              return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          }
      },
      methods: {
          onLogout () {
              this.$store.dispatch('logout');
              this.$router.push('/signin')
          }
      }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
