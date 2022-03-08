
<template>
  <div>
   
      <a-icon type="menu" @click="showDrawer" />
    
    <a-drawer
       placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
    <a href="" class="logo">
        <img src="/logo.png" />
    </a>
     
     <ul >
        <li>
          <a class="active" href="#">{{ $t("Home") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("About") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("Contact") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("Login") }}</a>
        </li>
      </ul>

    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.logo{
   margin: auto;
    display: block;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ececec;
    padding-bottom: 22px;
}
.logo img{
        width: 65px;
}
a.active{
    font-weight: bold;
    color: #ba8554;
}
li {
    margin-top: 25px;
    text-align: center;
}

</style>