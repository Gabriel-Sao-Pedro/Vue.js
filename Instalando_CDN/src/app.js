const { createApp, ref } = Vue;

createApp({
  setup() {
    const name = ref('');
    const age = ref(23);
    const input_name = ref('');
    const submitForm = (e) => {
      e.preventDefault();
      console.log('Clicou')
      console.log(input_name.value)
      name.value = input_name.value;
    }
    return { name, age, input_name, submitForm};
    
  }
}).mount('#app');