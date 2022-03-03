<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from "../components/test/Todos.vue";
import AddTodo from "../components/test/AddTodo.vue";
import FilterTodos from "../components/test/FilterTodos.vue";

export default {
    name: 'IndexPage',
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
        ]
      }
    },
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>