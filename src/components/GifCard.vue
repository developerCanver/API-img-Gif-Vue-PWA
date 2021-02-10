<template>
    <div class="card" style="width: 18rem;">
       <img 
       loader="lazy" 
       :src="data.images.downsized.url" class="card-img-top" alt="Gif">  
        <div class="card-body">
            <h5 class="card-title">{{data.title  }}</h5>
         
            <a :href="data.embed_url" class="btn btn-primary">Ver tamaño completo</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: { //resivo el array de la Api
            data: Object,

        },
        // methods:{
        //     console.log(this.data);
        // }


    }
</script>
