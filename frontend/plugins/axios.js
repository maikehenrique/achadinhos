import { obtemBaseUrlApi } from '@/utils/extractor'

export default function ({ $axios, app }) {
  $axios.setBaseURL(obtemBaseUrlApi())
  $axios.onRequest((config) => {
    $axios.setToken(
      '691117e969622da203ebb57e8ccd843775a7a41b59fa449beec473a5454cacda67ad9223f31e344b616c750c2e6560a6debce89d5211a78c592e681a3cbd8aa207c5216a49efd8ced10d27190771c1117f164492610624d07a08e6f2196bc96a01971b004248a485bcc78c1c6775069aed83288a4db4b3f8f411fd0305ada91b',
      'Bearer'
    )
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
