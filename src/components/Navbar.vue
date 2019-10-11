<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Titulo Provisional</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="get" v-if="privateShow">Get</b-nav-item>
          <b-nav-item to="delete" v-if="privateShow">Delete</b-nav-item>
          <b-nav-item href="#">Link 3</b-nav-item>
          <b-nav-item href="#">Link 4</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form></b-nav-form>

          <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#" v-if="privateShow">Perfil</b-dropdown-item>
            <b-dropdown-item @click="onClik" to='#' v-if="privateShow">Sign Out</b-dropdown-item>
            <b-dropdown-item to="singIn" v-if="!privateShow">Sign In</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import router from './../router';
export default {
  data() {
    return {
      privateShow: false,
    };
  },
  created() {
    if (localStorage.getItem("user")) {
        this.privateShow = true;
    }
  },
  methods: {
    onClik() {
      localStorage.removeItem("time");
      localStorage.removeItem("user");
      router.push("/")
    }
  }
};
</script>