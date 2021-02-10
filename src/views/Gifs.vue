<template>
  <div class="container m-t3 border">
    <h1 class="text-center">Gifs</h1>
    <Search @accion="getGifs" />
    <hr>
    <div class="row">
    <loading v-if="load" />
      <div class="col-12 col-lg-3 " v-for="gif in gifs" :key="gif.id">
        <Gif-card :data="gif" class="m-2 w-75" />

      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
  import GifCard from '../components/GifCard.vue';
  import Search from '../components/Search.vue';
  export default {
    components: {
      GifCard,
      Search,
      Loading,
    },

      data: () => ({
      gifs: {},
      load: false,
    }),
    created() { // consulta de api con Axios
      // const res= this.axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(({data}) => console.log(data))
      this.getGifs();
    },
    methods: {
      async getGifs(search = "Goku") {
        this.load = true;

        const key = `i7T48NdJfGRrpXPnfPVAfobSLGDftueq`;        
        const {
          data
        } = await this.axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`);
        // console.log(res)
        this.gifs = data.data;
        this.load = false;
        // console.log(this.gifs);
        //console.log(data);

      }
    }

  }
</script>

<style>

</style>