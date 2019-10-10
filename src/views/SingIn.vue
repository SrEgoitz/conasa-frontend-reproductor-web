<template>
  <div class="singIn">
    <Navbar />
    <SingInForm/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingInForm from '@/forms/SingInForm.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    SingInForm,
    Navbar,
    Footer,
  },
})
export default class Link extends Vue {}
</script>
