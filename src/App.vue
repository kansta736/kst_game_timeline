<template>
  <v-app>
    <v-main>
      <Header />
      <TimeLine />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import TimeLine from './components/TimeLine.vue';
import SideVar from './components/SideVar.vue';


export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Footer,
    TimeLine,
    SideVar
  },

  data: () => ({
    //
  }),
}
</script>
