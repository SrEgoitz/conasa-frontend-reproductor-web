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

        <b-card header-bg-variant="dark" header-text-variant="white" header="Login" v-if="cardShow">
          <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.pass"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
              <b-button variant="link" to="change" class="text-danger">¿Has olvidado tu contraseña?</b-button>
            </b-form-group>

            <b-button type="submit" variant="dark">
              <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Login
            </b-button>
          </b-form>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import FormService from "../components/FormService.js";
import { mixins } from '@/components/mixins.js';
import router from './../router';
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
  methods: {
    onReset() {
    },
    onSubmit() {
      this.showSpiner = true;
      const url = process.env.VUE_APP_URL_API_LOGIN;
      fetch(process.env.VUE_APP_URL_API + url, {
        method: "POST",
        headers: formService.getHeaders(),
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.pass
        })
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.showSpiner = false;
          console.log(data);

          if (data.error) {
            this.$bvToast.toast(data.error, {
              title: "Error",
              toaster: "b-toaster-bottom-full",
              autoHideDelay: 2000,
              variant: "danger"
            });
          } else {
            let user = data.message.user;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("time", data.message.time );

            this.$bvToast.toast("Usuario obtenido correctamente", {
              title: "Success",
              autoHideDelay: 2000,
              variant: "success",
              toaster: "b-toaster-bottom-full"
            });
            setTimeout(() => {
              router.push("/private")
            }, 1000);
            
          }
        })
        .catch(err => {
          console.log(err);
          console.log("asdfasdfadsf");
        });
    }
  }
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