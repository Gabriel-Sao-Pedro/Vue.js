<template>
    <div>
        <h1>Meu nome é: {{ nome }}</h1>
    </div>
</template>

<script>

    export default{
        name: 'LifeCycle',
        data(){
            return{
                nome: 'ainda não sei'
            }
        },
        created(){
            setTimeout(() => {
               this.nome = 'Gabriel'
            }, 2000)

            this.lifeCycle()
            
        },
        mounted(){
                setTimeout(() => {
                    this.nome = 'Gabriel São Pedro'
                }, 5000)
                this.lifeCycle()
        },
        methods:{
            lifeCycle(){
                console.log('Executou')
            }
        }
    }
</script>