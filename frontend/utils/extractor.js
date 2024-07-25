function obtemBaseUrlApi() {
  return `${obtemBaseUrl()}/api/`
}

function obtemDominioUrl() {
  return process.env.hostApi
}

function obtemBaseUrl() {
  const instancia = obtemDominioUrl()
  return instancia
}

export { obtemBaseUrl, obtemBaseUrlApi, obtemDominioUrl }
