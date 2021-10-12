<template>
<div>
  <div class="mb-5">
      <Header></Header>
  </div>

  <div class="container">
    <router-view/>
  </div>

  <div>
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
//import Footer from './components/Layout/Footer.vue';

export default {
  name: "App",
  components: { Header,Footer },
};

</script>

<style>

</style>
