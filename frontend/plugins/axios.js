import { obtemBaseUrlApi } from '@/utils/extractor'

export default function ({ $axios, app }) {
  $axios.setBaseURL(obtemBaseUrlApi())
  $axios.onRequest((config) => {
    const apiChave =
      process.env.NODE_ENV === 'production'
        ? process.env.apiKey
        : process.env.apiKeyHom
    $axios.setToken(apiChave, 'Bearer')
  })
  $axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
}
