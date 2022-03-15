<template>
      <Ticket />
</template>
<script>
import Ticket from "../../components/ticket/index.vue";
export default {
  validate({ params }) {
    return !isNaN(params.id);
  },
  components: {
    Ticket
  }
 
};
</script>

 