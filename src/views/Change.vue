<template>
  <div class="change">
    <Navbar/>
    <ChangeForm/>
    <Footer/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import ChangeForm from '@/forms/ChangeForm.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    ChangeForm,
    Navbar,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
