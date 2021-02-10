<template>
  <div class="about mt-5 d-flex justify-content-center">

    <div class="card mb-3 bg-dark text-white" style="max-width: 540px;">
      <div class="row g-0 ">
        <div class="col-md-4">
          <img :src="imgAvatar" class="m-3" alt="...">
        </div>
        <div class="col-md-8">

          <div class="card-body m-5">
            <p class="card-text"><small class="text-muted">Developer</small></p>
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{descripcion}}</p>
            <p class="card-text">Fecha Git: <small class="text-muted">{{ fecha}}</small></p>
             <p class="card-text">Localidad: <small class="text-muted">{{ localidad}}</small></p>
            <div class="d-grid gap-2">
              <a :href="perfil" class="btn btn-outline-light" type="button">GitHub</a>
            </div>
            <div class="d-grid gap-2">
              <a :href="url" class="btn btn-outline-primary" type="button">Web</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      imgAvatar: String,
      name: String,
      fecha: String,
      perfil: String,
      descripcion: String,
      url: String,
      localidad: String,

    }),
    created() {
      this.getGitHunb();
    },
    methods: {

      async getGitHunb() {

        const {
          data
        } = await this.axios.get(
          'https://api.github.com/users/developerCanver'
        );
        this.imgAvatar = data.avatar_url;
        this.fecha = data.created_at;
        this.perfil = data.html_url;
        this.name = data.name;
        this.descripcion = data.bio;
        this.url = data.blog;
        this.localidad = data.location;
        console.log(data);

      }
    }
  }
</script>

<style>

</style>