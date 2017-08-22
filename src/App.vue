<template>
  <v-app light>
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
      </v-list>
    </v-navigation-drawer>

    <v-toolbar id="tlbr" dark class="success">
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
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
      data () {
      return {
          drawer: false,
          menuItems:[
              {icon: 'supervisor_account', title: 'Patients', link: '/patients'},
              {icon: 'person_add', title: 'Nouveau Patient', link: '/nouveauPatient'}
          ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
