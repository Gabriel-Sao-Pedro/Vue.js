<template>
    <div>
        <h2>Essa é a descrição da pessoa: {{ nome }}</h2>
        <Info v-bind:email="email" v-bind:esta_trabalhando="true"/>
        
    </div>
    
</template>

<script>
    import Info from './Info.vue'

    export default{
        name: 'Pessoa',
        components: {
            Info
        },
        data(){
            return{
                nome: 'Gabriel',
                email:'gabrielosaopedro@gmail.com'
            }
        }
    }
</script>