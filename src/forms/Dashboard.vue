<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button>

    <b-modal id="modal-center" centered title="BootstrapVue">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>-->
    <b-container class="bv-example-row">
      <b-card-group>
        <b-card header-bg-variant="dark" header-text-variant="white" header="Presentacion">
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import FormService from "../components/FormService.js";
import { mixins } from '@/components/mixins.js';
const formService = new FormService();
export default {
  mixins: [mixins],
  data() {
    return {
      form: {
        email: "trabuduaegoitz@gmail.com",
        pass: "123456789",
      },
      cardShow: true,
      msg: "Bienvenido a la pagina del login de mi aplicaccion",
      showSpiner: false,
      show: true
    };
  },
};
</script>


<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>