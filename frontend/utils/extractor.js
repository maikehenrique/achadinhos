function obtemBaseUrlApi() {
  return `${obtemBaseUrl()}/api/`
}

function obtemDominioUrl() {
  return process.env.hostApi
}

function obtemBaseUrl() {
  const instancia = obtemDominioUrl()
  if (process.env.NODE_ENV === 'production') {
    return instancia
  } else {
    return `http://127.0.0.1:3001`
  }
}

export { obtemBaseUrl, obtemBaseUrlApi, obtemDominioUrl }
