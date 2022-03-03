<template lang="">
    <div>
        <h1>test css</h1>

    </div>
</template>
<script>
export default {
    head() {
      return {
        title: 'Nuxt Structure - beta',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'todos description',
            name: 'todos description',
            content: 'todos My custom description'
          }
        ],
        css:[
            './home.css'
        ]
      }
    },
}
</script>
<style lang="">

</style>