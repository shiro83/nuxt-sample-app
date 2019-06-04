<template>
  <v-toolbar color="cyan lighten-4">
    <v-toolbar-title>
      <nuxt-link to="/">Vue.js + Nuxt.js Tutorial</nuxt-link>
    </v-toolbar-title> 
    <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat nuxt-link to="/">Index</v-btn>
    <v-btn flat nuxt-link to="/page1">Page1</v-btn>
    <v-btn flat nuxt-link to="/page2">Page2</v-btn>
    <v-btn flat nuxt-link to="/todo">Todo</v-btn>
    <v-btn flat nuxt-link to="/firebase">Firebase</v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>
