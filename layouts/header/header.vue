<template >
  <header class="header container_cc">

<div class="header_p">
    <a href="" class="logo">
        <img src="/logo.png" />
    </a>
 
    <nav class="menu">
      <ul >
        <li>
          <a class="active" href="#">{{ $t("Home") }}</a>
        </li>
        <li>
           <a   href="/about">{{ $t("About") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("Contact") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("Login") }}</a>
        </li>
      </ul>
    </nav>
    <div class="mob_nav">
      <Menu />
    </div>
</div>
  </header>
</template>

<script>
import Menu from "./menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>


<style scoped>
 

.header_p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
}
.active{
  color: #bf804b;
    border-bottom: 1px solid #bf804b;
    padding-bottom: 10px;
}
.menu ul{
  font-size: 16px;
  display: flex;
 
}
.menu ul li{
    margin-left: 5em;
}
.menu ul li a:hover{
  color: #bf804b;
}

.logo img{
      width: 11em;
}
 
 .mob_nav{
      display: none;
      font-size: 20px;
    color: #bf804b;
   }
@media(max-width:768px){
   .mob_nav{
      display: block;
   }
   .menu ul{
     display: none;
   }
}
</style>