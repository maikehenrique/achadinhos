const apiFactory = (axios) => ({
  buscarProdutoApi(buscar) {
    return axios.get(
      `products?populate=*&filters[$or][0][name][$containsi]=${buscar}&filters[$or][1][code][$containsi]=${buscar}`
    )
  },
  buscarProdutoDiaApi(pagination) {
    return axios.get(
      'products?populate=*&pagination[page]=' +
        pagination +
        '&sort[0]=updatedAt:desc'
    )
  },
  buscarBannerApi() {
    return axios.get('banner?populate=*')
  },
})

export default ({ $axios }, inject) => {
  const api = apiFactory($axios)
  inject('api', api)
}
