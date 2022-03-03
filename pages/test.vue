
<template>

    <div>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('ar')">Arabic</nuxt-link>
        <h2>Counter</h2>
        Counter: {{counter}}
  <p>{{ $t('welcome') }}</p>

        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
    </div>
</template>

<script>
export default {
    computed:{
        counter(){
            return this.$store.state.counter;
        }
    },
    methods: {
        increase (){
            this.$store.state.counter ++;
        },
        decrease (){
            this.$store.state.counter --;
        }
    }
}
</script>