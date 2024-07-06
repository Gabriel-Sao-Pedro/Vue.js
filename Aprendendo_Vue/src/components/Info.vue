<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades.</p>
        <p>Utilizo as seguintes tecnologias para backend:</p>
        <ul>
            <li v-for="(technology, index) in backend_tecnologias" v-bind:key="index">
                {{technology}}
            </li>

        </ul>
        <p >Utilizo as seguintes tecnologias para Front-End:</p>
        <ul>
            <li v-for="(technology) in frontend_tecnologias" v-bind:key="technology.id">   
                {{technology.language}}
            </li>
        </ul>
        <div>
            <button @click="showEmail">
                {{ textoBotao }}
            </button>
        </div>
        <p v-show="mostrar_email" >Mande uma mensagem  para: {{ email }}</p>
        <p class="teste">Para acessar meu portifólio <a v-bind:href="'https://www.google.com/'" target="blank">basta clicar aqui</a></p>
        <Picture/>
        <Form/>
    </div>
</template>

<script>
    import Form from './Form.vue'
    import Picture from './Picture.vue'
    export default{
        name: 'Info',
        components: {
            Form,
            Picture
        },
        props: {
            email: String,
            esta_trabalhando: Boolean

        },
        data(){
            return{
                mostrar_email: false,
                textoBotao: 'Mostrar email',
                backend_tecnologias: ['Python', 'JavaScript', 'React', 'SQL'],
                frontend_tecnologias: [{id:1, language: 'HTML'}, {id:2, language: 'CSS'}, {id:3, language: 'JavaScript'}]
            }
        },
        methods: {
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textoBotao ='Mostrar email'
                }else{
                    this.textoBotao = 'Esconder email'
                }
            }
        }
    }
</script>
<style >
    .paragrafo-pai{
        color: #1a788f;
        background: #941818;
    }
</style>