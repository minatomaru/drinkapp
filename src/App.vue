<template>
  <v-app>
    <HeaderView/>
    <v-content>
      <router-view/>
    </v-content>
    <FooterView/>
  </v-app>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
// import HomeView from './components/HomeView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    // HomeView,
    FooterView
  }
}
</script>