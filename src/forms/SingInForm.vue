<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="5">
          <div>
            <b-card header-bg-variant="dark" header-text-variant="white" header="Sing In">
              <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Surname:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.surname"
                    type="text"
                    required
                    placeholder="Enter surname"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Email address:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="User Name:" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.userName"
                    type="text"
                    required
                    placeholder="Enter user name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Password:" label-for="input-5">
                  <b-form-input
                    id="input-5"
                    v-model="form.pass"
                    type="password"
                    required
                    placeholder="Enter password"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-6" label="Fecha Nacimiento:" label-for="input-6">
                  <b-form-input id="input-6" v-model="form.fechaNa" type="date" required></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="dark">
                  <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Submit
                </b-button>
                <b-button type="reset" variant="danger">Back</b-button>
              </b-form>
            </b-card>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script >
import Vue from "vue";
import FormService from "../components/FormService.js";
import { mixins } from "@/components/mixins.js";
const formService = new FormService();
export default {
  mixins: [mixins],
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        userName: "",
        pass: "",
        fechaNa: ""
      },
      msg: "",
      showSpiner: false,
      toastError: "",
      show: true
    };
  },
  methods: {
    onReset() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm(
          "Seguro que quieres volver, se perderan todos los datos",
          {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          }
        )
        .then(value => {
          if (value == true) {
            console.log("quiere volver");
          }
        })
        .catch(err => {
          // An error occurred
        });
    },
    onSubmit() {
      this.showSpiner = true;
      const url = process.env.VUE_APP_URL_API_REGISTRO;

      fetch(process.env.VUE_APP_URL_API + url, {
        method: "POST",
        headers: formService.getHeaders(),
        body: JSON.stringify({
          nombre: this.form.name,
          apellidos: this.form.surname,
          email: this.form.email,
          username: this.form.userName,
          password: this.form.pass,
          fecha_nacimiento: this.form.fechaNa
        })
      })
        .then(res => res.json())
        .then(data => {
          this.showSpiner = false;
          console.log(data.errors);
          const toast = this.$bvToast;
          if (data.errors) {
            let errors = data.errors;
            let msge;
            errors.forEach(function(element) {
              msge = element.message;
              toast.toast(msge, {
                title: "Error",
                autoHideDelay: 5000,
                variant: "danger"
              });
            });
          } else {
            this.$bvToast.toast("Usuario introducido correctamente", {
              title: "Success",
              autoHideDelay: 2000,
              variant: "success",
              toaster: "b-toaster-bottom-full"
            });
          }
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped lang='scss'>
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