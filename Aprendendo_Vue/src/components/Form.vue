<template>
    <form action="" @submit="enviarFormulario($event)">
        <h2>Meu Formulário</h2>
        <div>
            <input type="text" class="Formu" v-model="name" placeholder="Digite seu nome"/>
        </div>
        <div>
            <input type="text" class="Formu" v-model="email" placeholder="Digite seu email"/>
        </div>
        <div>
            <Submit  value="Enviar"/>
        </div>
    </form>
    
</template>

<script>
    import InputText from './Form/InputText.vue';
    import Submit from './Form/Submit.vue';

    export default{
        name: 'Form',
        data(){
            return{
                name:   '',
                email: ''
            }
        },
        components: {
            InputText,
            Submit
        },
        methods:{
            enviarFormulario(e){
                e.preventDefault()
                const name = this.name;
                const email = this.email;
                console.log('Formulário enviado')
                console.log('Nome: ', name, 'Email: ', email)
            }
        }
    }
</script>
<style scoped>
    form{
        margin-block:100px;
    }
    .Formu{
        margin-block: 10px;
        width: 50vh;
    }
</style>