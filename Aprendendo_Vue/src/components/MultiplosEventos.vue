<template>
    <div> 
        <button @click="primeiro($event), segundo($event), terceiro($event)" >Ativar mútiplos eventos</button>
        <p>{{mutiplos_eventos}}</p>
    </div>    
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data(){
        return{
            mutiplos_eventos: ''
        } 
    },
    methods:{
        primeiro(e){
            this.mutiplos_eventos = 'Primeiro evento ativado'
        },
        segundo(e){
            setTimeout(()=>
                this.mutiplos_eventos = 'Segundo evento ativado', 1000)
        },
        terceiro(e){
            setTimeout(()=>
                this.mutiplos_eventos = 'Terceiro evento ativado', 2000)
        }
    }
        
}
</script>

<style scoped>
    div{
        margin: 100px;
    }
</style>