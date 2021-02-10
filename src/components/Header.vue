<template>

  <!-- Navbar content -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div class="container-fluid">
      
    <!-- <a class="navbar-brand" href="#">Gif Routes</a> -->
    <router-link to="/" class="navbar-brand">Gif Router</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        
         <li class="nav-item">
           <router-link class="nav-link active" aria-current="page" to="/gifs">Gifs</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page" to="/stickers">Stickers</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
        </li>
       
      
      </ul>
  
    </div>
  </div>

</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>