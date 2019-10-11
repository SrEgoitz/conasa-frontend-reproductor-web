<template>
  <div class="home">
    <Navbar/>
    <Dashboard/>
    <Footer/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from '@/forms/Dashboard.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue'  ;

@Component({
  components: {
    Dashboard,
    Navbar,
    Footer,
  },
})
export default class Home extends Vue {}

</script>
