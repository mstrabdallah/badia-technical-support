<template>
   <a-locale-provider :locale="ar">

<div class="container" >
<Header />
  <Nuxt />
<Footer />
</div>
   </a-locale-provider>
</template>
<script>
import Header from './header/header.vue'
import Footer from './footer/footer.vue'
export default{
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  components:{
    Header,
    Footer
  },
}
</script>

<style>
.container:lang(ar){
direction: rtl;
}
*{
  margin: 0px;
  padding: 0px;
  
}
ul{
  list-style-type: none;
}
ul,p{
  margin: 0px;
  margin-bottom:0px
}
a{
 color: #444;

}
.container_cc{
  padding: 0px 100px;
}


.page {
  margin-top: 40px;
}
.page_cc {
  min-height: 550px;
  border-radius: 4px;
  border: 1px solid #be814b;

  padding-bottom: 30px;
}
.page h1 {
  text-align: center;
  background: #be814b;
  width: max-content;
  margin-left: 20px;
  margin-top: -20px;
  padding: 0px 35px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 30px;
}


@media(max-width:1100px){
 
  .container_cc {
    padding: 0px 50px;
}
}
</style>
