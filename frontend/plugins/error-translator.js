// plugins/error-translator.js
export default ({ app }, inject) => {
  const errorMessages = {
    'Not Found': 'Não encontrado',
  }

  const translateError = (error) => {
    return errorMessages[error] || error
  }

  inject('translateError', translateError)
}
