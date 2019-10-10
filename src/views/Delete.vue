<template>
  <div class="delete">
    <Navbar/>
    <DeleteForm/>
    <Footer/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import DeleteForm from '@/forms/DeleteForm.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    DeleteForm,
    Navbar,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
