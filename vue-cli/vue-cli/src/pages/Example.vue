<template>
    <div class="wrapper-content wrapper-content--fixed">
  <section>
    <div class="container">
      <h1> Example page </h1>
            <input type="text" v-model="message" >
            <button class="btn btnPrimary" @click="setMessage"> Change message </button>
            <br>
            <br>
      <p> {{ getMessage }} </p>
    </div>
  </section>
  </div>
</template>
<script>
export default {
    data () {
        return{
            message: null,
        }
    },
 computed: {
     getMessage() {
      return this.$store.getters.getMessage
     }
  },
  method:{
      setMessage () {
this.$store.dsipatch('setMessage',this.message)
      }
  }
}
</script>