<template>
  <div class="elemento">
    <h2>Dados Cliente</h2>
    <p>Nome: {{ nome }}</p>
  </div>
</template>

<script>
import barramento from '@/barramento';

export default {
  name: "dados-cliente",
  props: {
    nome: String
  },
  created() {
    barramento.quandoNomeMudar(nome => {
      // eslint-disable-next-line vue/no-mutating-props
      this.nome = nome
    })
  }

}
</script>

<style>
.elemento {
  flex: 1;
  border: 2px solid #fff;
  color: #fff;
}
</style>