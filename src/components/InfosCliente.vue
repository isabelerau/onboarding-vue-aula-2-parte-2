<template>
  <div class="elemento">
    <h2> Infos Cliente</h2>
    <p> Nome: {{ nome }}</p>
    <button class="btn" @click="alterarNome"> Alterar nome barramento </button>
  </div>
</template>

<script>
import barramento from '@/barramento';

export default {
  name: 'infos-cliente',
  props: {
    nome: String,
  },
  methods: {
    alterarNome() {
      // eslint-disable-next-line vue/no-mutating-props
      this.nome = 'Henrique'
      barramento.alterarNome(this.nome)
    }
  }
}
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
}

</style>