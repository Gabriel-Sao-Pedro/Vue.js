<template>
    <div>
        <h1>Olá Vue </h1>
        <h2>Meu nome é {{nome}}</h2>
        <p>Sou {{ profissão }}</p>
        <multiplos-eventos/>
        <reutilizacao/>
    
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'


export default {
    nome: 'PrimeiroComponente',
    components: { 
        MultiplosEventos,
        Reutilizacao
    },
    data() {
        return {
            nome: 'Gabriel',
            profissão: 'Desenvolvedor Front-End',
        }
    }
}
</script>
