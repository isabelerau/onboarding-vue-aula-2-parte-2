import Vue from 'vue';

export default new Vue({
  methods: {
    alterarNome(nome) {
      this.$emit('nomeMudou', nome)
    },
    quandoNomeMudar(callback) {
      this.$on('nomeMudou', callback)
    }
  }
})