<template>
  <div class="page container_cc">
    <div class="page_cc">
      <h1>about</h1>

 
     <p></p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  state: () => ({
    name:'ffff',
    statePhone: true,
  }),
    computed: mapGetters(["allabout",'stateabout']),

 
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit({ $axios, $config }) {
      const mountains = await this.$axios
        .$post(`/about`, this.formInline.phone)
        .then((response) => {
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
 
 
  
</style>