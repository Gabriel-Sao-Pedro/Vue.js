<template>
  <div>
    <Header v-bind:esta_logado="true"/>
    <PrimeiroComponente/>
    <LifeCycle/>
    <Pessoa/>
    <p class="paragrafo-pai">
      O dado de App é {{ testando }}
    </p>

  </div>
</template>

<script>
import PrimeiroComponente from '@/components/PrimeiroComponente.vue'
import LifeCycle from '@/components/LifeCycle.vue'
import Pessoa from '@/components/Pessoa.vue'
import Header from '@/components/Header.vue'


  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header,
    },
    data() {
      return {
       testando: 'teste'
      }
    }

  }
</script>
<style >
  body{
    background: #000;
    color: #fff;
  }
  a{
    color:#db0c0c
  }
  .teste{
    color: #3218a5;
    background: #18b60a;
  }
</style>