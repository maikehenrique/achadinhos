<template>
  <div class="buscar">
    <div class="buscar__content pt-4">
      <div v-if="!productNotFound" class="buscar__products flex flex-wrap pb-3">
        <div v-for="(produtos, index) in productsDay" :key="index">
          <CpProduct v-bind="produtos" />
        </div>
      </div>
      <div v-else>
        <div class="text-center pt-4">
          <b class="buscar__title">
            Lamentamos, nenhum produto encontrado com esse critério de pesquisa.
          </b>
        </div>
        <p class="buscar__title text-center pb-1">
          Tente novamente com outro termo para busca...
        </p>
        <div class="text-center pb-3">
          <a href="/" class="buscar__link__home text-center pb-3"
            >ou clique aqui para voltar para página inicial</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      productsDay: [],
      productNotFound: false,
    }
  },
  computed: {
    ...mapGetters(['urlHostApi']),
  },
  watch: {
    '$route.query.product': {
      handler(newVal, oldVal) {
        this.buscarProduto(newVal)
      },
      immediate: true,
    },
  },
  created() {
    const buscar = this.$route?.query?.product
    this.buscarProduto(buscar)
  },
  methods: {
    async buscarProduto(buscar) {
      await this.$api
        .buscarProdutoApi(buscar)
        .then((data) => {
          if (data?.data?.data?.length > 0) {
            this.montaProdutos(data?.data?.data)
            this.productNotFound = false
          } else {
            this.productNotFound = true
          }
        })
        .catch((error) => {
          const mensagem =
            error?.response && error?.response?.data
              ? error?.response?.data?.error.message
              : error
          this.$messager.Error(this.$translateError(mensagem))
        })
    },
    montaProdutos(products) {
      const produtos = []
      console.log('urlHostApi' + this.urlHostApi)
      products.forEach((item) => {
        produtos.push({
          name: item?.attributes?.name || '',
          img: item?.attributes?.photo?.data
            ? this.urlHostApi + item.attributes.photo.data[0].attributes.url
            : null,
          price: item.attributes.price,
          url: item.attributes.url,
        })
      })

      this.productsDay = produtos
    },
  },
}
</script>

<style>
.buscar__products {
  grid-gap: 12px;
}

.buscar {
  background-color: #faf5f8;
  min-height: 713px;
  width: 100%;
}

.buscar__content {
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  padding: 0 20px;
}

.buscar__title {
  color: var(--color-text-primary);
}

.buscar__link__home {
  color: var(--background-color);
}
</style>
