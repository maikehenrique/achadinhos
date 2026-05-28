import { obtemBaseUrlApi } from '@/utils/extractor'

export default function ({ $axios }) {
  $axios.setBaseURL(obtemBaseUrlApi())
}
