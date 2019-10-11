<template>
  <div class="hello">
    <h1 v-text="msg"></h1>

    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="5">
          <div>
            <b-card header-bg-variant="dark" header-text-variant="white" header="Delte">
              <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="ID:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.id"
                    required
                    type="number"
                    placeholder="Enter ID"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="dark">
                  <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Submit
                </b-button>
                <b-button type="reset" variant="danger" href="/">Back</b-button>
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
        id: ""
      },
      msg: "Bienvenido a la pagina del change de mi aplicaccion",
      showSpiner: false,
      toastError: "",
      show: true
    };
  },

  methods: {
    onReset() {},
    onSubmit() {
      this.showSpiner = true;
      const url = process.env.VUE_APP_URL_API_REGISTRO + "/" + this.form.id;
      fetch(process.env.VUE_APP_URL_API + url, {
        method: "DELETE",
        headers: formService.getHeaders()
      })
        .then(res => res.json())
        .then(data => {
          this.showSpiner = false;
          console.log(data);
          if (data.error) {
            this.$bvToast.toast(data.error, {
              title: "Error",
              autoHideDelay: 2000,
              variant: "danger",
              toaster: "b-toaster-bottom-full"
            });
          } else {
            this.$bvToast.toast("Usuario borrado correctamente", {
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