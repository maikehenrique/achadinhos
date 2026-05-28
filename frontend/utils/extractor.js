function obtemBaseUrlApi() {
  return `${obtemBaseUrl()}/api/`
}

function obtemDominioUrl() {
  return process.env.hostApi
}

function obtemBaseUrl() {
  return process.env.hostApi || 'http://localhost:3001'
}

export { obtemBaseUrl, obtemBaseUrlApi, obtemDominioUrl }
