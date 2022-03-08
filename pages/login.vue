<template>
  <div class="page container_cc">
    <div class="page_cc login">
      <h1>Login</h1>

      <!-- <VuePhoneNumberInput v-model="phone" /> -->

      <div class="form_login_cc">
        <div class="form_login">

           <a-divider orientation="center">
      Enter your phone number first
    </a-divider>
          <a-form-model
            :model="formInline"
            @submit="handleSubmit"
            @submit.native.prevent
          >
            <a-form-model-item v-bind:style= "[!stateLogin ?  display:none]">
              <a-input
                class="input_style"
                v-model="formInline.phone"
                placeholder="phone"
              >
                <a-icon
                  slot="prefix"
                  type="phone"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-model-item>

            <div v-if="stateLogin">
              <a-form-model-item>
                <a-input
                  v-model="formInline.password"
                  type="password"
                  placeholder="Password"
                  class="input_style"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-model-item>
            </div>

            <a-form-model-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="formInline.phone === ''"
              >
                Log in
              </a-button>
            </a-form-model-item>
          </a-form-model>
          <p>{{ counter }}</p>
        </div>
      </div>
    </div>
        <p>{{ stateLogin }}</p>
{{name}}
  </div>
  
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
   
  computed: mapGetters(["allLogin", "stateLogin"]),



  data() {
    return {
       stateLogin: false,
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit({ $axios, $config }) {
      const mountains = await this.$axios
        .$post(`/login`, this.formInline.phone)
        .then((response) => {
          console.log(this.stateLogin)
          this.stateLogin=true;
          return response;
        })
        .catch((error) => {
          return error;
          // return Promise.reject(error)
        });
      return { mountains };
    },
  },
};
</script>



<style scoped>
.login {
  background: #f5f5f5 url(/background_bg_login.png) 53px 149px no-repeat !important;
  background-position: 50%;
  background-size: cover;
}

.form_login {
  width: 600px;
  padding: 40px;
  border-radius: 5px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0 1px 17px 0 rgb(95 95 95 / 20%);
}

.ant-form-item {
  text-align: center !important;
}

.form_login button {
  width: 100%;
  background: rgb(190 129 75);
  border: none;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input_style {
  text-align: left;
}

@media (max-width: 768px) {
  .form_login {
    width: 100%;
    padding: 20px;
  }
}
</style>