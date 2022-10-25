<template>
  <div class="container">
    <h1> Central de controle do cliente </h1>
    <p> Nome do cliente: {{ nomeCliente }}</p>
    <input @keydown.tab="alterarNome" />
    <div class="elementos">
      <DadosCliente  :nome="nomeCliente"/>
      <infos-cliente :nome="nomeCliente" />
    </div>
  </div>
</template>

<script>
import DadosCliente from "@/components/DadosCliente.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cliente',
  components: {
    DadosCliente,
  },
  data() {
    return {
      nomeCliente: ''
    }
  },
  created() {
    this.nomeCliente = 'Fernanda'
  },
  methods: {
    alterarNome(e) {
      this.nomeCliente = e.target.value;
    }
  }

}
</script>

<style scoped>
.container {
  background-color: #6646db;
  color: #fff;
  padding: 10px;
}

.elementos {
  display: flex;
}

.elementos > * {
  margin: 10px;
}
</style>