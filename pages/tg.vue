<template>
<div>

  <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="formInline.user" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        Log in

        
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <p>{{counter}}</p>
</div>
</template>
<script>
 
   
export default {
     computed:{
        counter(){
            return this.$store.state.counter;
        }
    },
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
      
      
    async handleSubmit({ $axios, $config }) {
        const mountains = await this.$axios.$post(`/mountains`,this.formInline)
        .then(response => {
        return response
      })
      .catch(error => {
        return error
        // return Promise.reject(error)
      })
        return { mountains }
    },
  },
};
</script>

