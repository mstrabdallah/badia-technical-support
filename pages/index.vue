<template>
  <div class="head_p container_cc">
    <div class="head">
       <a-row>
      <a-col  :md="12" :lg="12">
       <div class="head_left">
        <h1>
          <span>tec</span>hnical <br />
          support
        </h1>

        <p>
         Prefer to write it out instead? <br>
         Shoot us an email and we'll get back to you soon.
        </p>

        <p>Technical Support is a position hired by a company to oversee and <br>maintain their computer hardware and 
        software systems. Their skills are an asset to the ...</p>
         <NuxtLink to="/login"><button>login</button></NuxtLink>
      </div>
      </a-col>
      <a-col :md="12" :lg="12">
      <div class="head_right">
        <img
          src="/background_bg.png"
          class="head_img"
        />
      </div>
      </a-col>
    </a-row>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Nuxt Structure - beta",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
};
</script>
 
 <style scoped>
/* 
 .head_p {
  position: relative;
    z-index: 0;
    padding: 3em 0px;
    display: grid;
    align-items: center;
    min-height: 100vh;
    background: url(https://demo.w3layouts.com/demos_new/template_demo/24-10-2020/flatlayloginform-liberty-demo_Free/811260397/web/images/banner.jpg) no-repeat center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
}

.head_p::after{
  content: "";
    background: rgba(0, 4, 4, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
.head_left{
  text-align: center;
    color: #fff;
}

.head_left h1{
    color: #fff;

} */

.head {
  height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h1 {
  font-size: 5em;
}
.head h1 span {
  color: #bf804b;
}
 

.head_left button {
  width: 250px;
  margin-top: 36px;
  background: #be814b;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.head_left p{
      padding-bottom: 15px;
}
.head_right img {
  width: 100%;
  padding: 0px 20px;
}

 

@media (max-width: 768px) {
  .head_left {
    width: 100%;
  }

  .head {
    flex-direction: column;
    text-align: center;
    border: 1px solid #bf804b;
    border-radius: 5px;
    padding: 20px;
    padding-top: 3em;
    
  }
  .head_right {
    display: none;
  }
}
</style>