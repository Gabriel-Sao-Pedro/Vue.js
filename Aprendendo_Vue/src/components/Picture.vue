<template>
    <div>
        <img v-bind:src="avatar" v-bind:alt="descricao"/>
        <MudarImagem @mudar-imagem="trocarImagem"/>
    </div>
   
</template>
<script>

import MudarImagem from './Mudar_Imagem.vue';

export default {
    name: 'Picture',
    components: {
        MudarImagem
    },
    data(){
        return{
            avatar: '/img/mona_teste.jpg',
            descricao: 'Gabriel São Pedro'
        }
    },
    methods:{
        trocarImagem(){
            if(this.avatar === '/img/mona_teste.jpg'){
            this.avatar = '/img/panda.jpg';
        } else {
            this.avatar = '/img/mona_teste.jpg';
        }
        }
    }
}
</script>