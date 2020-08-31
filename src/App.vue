<template>
  <div id="app">
    <navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container-fluid">
      <router-view/>

    </div>
  </div>
</template>


<script>
import navbar from './views/layout/navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style scoped>

</style>