<template>
  <container class="home">
    <h1>This is an home page</h1>
    <p :key="n" v-for="n in 40">
      : {{ n }} This is an home page
    </p>
  </container>
</template>

<script>

export default {
  name: 'home',
  components: {}
}
</script>
