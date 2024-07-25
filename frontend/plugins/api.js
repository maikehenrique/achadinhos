const apiFactory = (axios) => ({
  buscarProdutoApi(buscar) {
    return axios.get('products?populate=*&filters[name][$containsi]=' + buscar)
  },
  buscarProdutoDiaApi() {
    return axios.get('products?populate=*')
  },
  buscarBannerApi() {
    return axios.get('banner?populate=*')
  },
})

export default ({ $axios }, inject) => {
  const api = apiFactory($axios)
  inject('api', api)
}
