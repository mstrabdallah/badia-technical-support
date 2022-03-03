<template>
<div class="container" >
<Header />
  <Nuxt />
<Footer />
</div>

</template>
<script>
import Header from './header/header.vue'
import Footer from './footer/footer.vue'
export default{
  components:{
    Header,
    Footer
  },
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  
}
</style>
