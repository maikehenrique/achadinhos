import Vue from 'vue'

const messagerFactory = (toast) => ({
  Error(erro, titulo = 'Erro', timeout = 3000, tempoDinamico = true) {
    toast.add({
      severity: 'error',
      summary: titulo,
      detail: erro.mensagem ? erro.mensagem : erro,
      life:
        tempoDinamico && JSON.stringify(erro).split(' ').length * 600 > 3000
          ? JSON.stringify(erro).split(' ').length * 600
          : timeout,
      closable: true,
    })
  },
  Info(info, titulo = 'Info', timeout = 3000, tempoDinamico = true) {
    toast.add({
      severity: 'info',
      summary: titulo,
      detail: info.mensagem ? info.mensagem : info,
      life:
        tempoDinamico && JSON.stringify(info).split(' ').length * 600 > 3000
          ? JSON.stringify(info).split(' ').length * 600
          : timeout,
      closable: true,
    })
  },
  Success(mensagem, titulo = 'Mensagem', timeout = 3000, tempoDinamico = true) {
    toast.add({
      severity: 'success',
      summary: titulo,
      detail: mensagem.mensagem ? mensagem.mensagem : mensagem,
      life:
        tempoDinamico && JSON.stringify(mensagem).split(' ').length * 600 > 3000
          ? JSON.stringify(mensagem).split(' ').length * 600
          : timeout,
      closable: true,
    })
  },
})

export default (ctx, inject) => {
  const messager = messagerFactory(Vue.prototype.$toast)
  inject('messager', messager)
}
