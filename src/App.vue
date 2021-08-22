<template>
  <v-app>
    <AppBar>

    </AppBar>

    <Main>

    </Main>

    <Footer>

    </Footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    AppBar,
    Main,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>