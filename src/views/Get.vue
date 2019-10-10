<template>
  <div class="get">
    <Navbar/>
    <GetForm/>
    <Footer/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import GetForm from '@/forms/GetForm.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    GetForm,
    Navbar,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
