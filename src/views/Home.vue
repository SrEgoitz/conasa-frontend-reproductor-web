<template>
  <div class="home">
    <Navbar/>
    <LoginForm/>
    <Footer/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/forms/LoginForm.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue'  ;

@Component({
  components: {
    LoginForm,
    Navbar,
    Footer,
  },
})
export default class Home extends Vue {}

</script>
