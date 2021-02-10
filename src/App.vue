
<template>


  <div id="nav">
    <Header/>

     <router-view/>

     <Footer />
    
  </div>

</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  components:{
    Header,
    Footer,
  }
}
</script>
<style>


</style>
