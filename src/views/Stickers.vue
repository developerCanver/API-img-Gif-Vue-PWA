<template>
  <div class="container m-t3 border">
    <h1 class="text-center">Stickers</h1>
    <Search @accion="getStickers" />
    <hr>
    <div class="row">
    <loading v-if="load" />
      <div class="col-12 col-lg-3 " v-for="sticker in stickers" :key="sticker.id">
        <StickersCard :data="sticker" class="m-2 w-75" />

      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
  import StickersCard from '../components/StickersCard.vue';
  import Search from '../components/Search.vue';
  export default {
    components: {
      StickersCard,
      Search,
      Loading,
    },

      data: () => ({
      stickers: {},
      load: false,
    }),
    created() { // consulta de api con Axios
      // const res= this.axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(({data}) => console.log(data))
      this.getStickers();
    },
    methods: {
      async getStickers(search = "Goku") {
        this.load = true;

        const key = `i7T48NdJfGRrpXPnfPVAfobSLGDftueq`;        
        const {
          data
        } = await this.axios.get(
          `https://api.giphy.com/v1/stickers/search?q=${search}&api_key=${key}`);
        // console.log(res)
        this.stickers = data.data;
        this.load = false;
        // console.log(this.gifs);
        console.log(data);

      }
    }

  }
</script>

<style>

</style>