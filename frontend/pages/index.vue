<template>
  <div class="content-principal" @scroll="handleScroll">
    <div class="container-content pt-4">
      <div class="container-carousel">
        <Carousel
          :value="picturesCarroucel"
          :num-visible="1"
          :num-scroll="1"
          :circular="true"
          :autoplay-interval="6000"
        >
          <template #item="slotProps">
            <div class="mb-3">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="border-round-3xl col-12 image-container banner--fade-in"
              />
            </div>
          </template>
        </Carousel>
      </div>
      <div class="container-achadin-dia col-12">
        <h2 class="title-categorias pb-2">Achadinhos do dia</h2>
        <div class="produtos-dia flex flex-wrap pb-3">
          <div v-for="(produtos, index) in productsDay" :key="index">
            <CpProduct v-bind="produtos" />
          </div>
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
      picturesCarroucel: [],
      productsDay: [],
      page: 1,
      pageCount: 1,
      loading: false,
      allLoaded: false,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3,
        },
        {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 2,
        },
        {
          breakpoint: '480px',
          numVisible: 2,
          numScroll: 1,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['urlHostApi']),
  },
  created() {
    this.carregaProdutosDia()
    this.carregaBanners()
  },
  mounted() {},
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async carregaProdutosDia() {
      if (this.loading || this.allLoaded) return

      this.loading = true
      await this.$api
        .buscarProdutoDiaApi(this.page)
        .then((data) => {
          this.montaProdutos(data.data.data)
          this.montaPaginacao(data.data.meta)
          this.loading = false
          setTimeout(() => {
            const loader = document.querySelectorAll('.product__img')
            loader.forEach((element) => {
              element.classList.add('product--fade-in-loaded')
            })
          }, 500)
        })
        .catch((error) => {
          const mensagem =
            error?.response && error?.response?.data
              ? error?.response?.data?.error.message
              : error
          this.$messager.Error(this.$translateError(mensagem))
          this.loading = false
        })
    },
    async carregaBanners() {
      await this.$api
        .buscarBannerApi()
        .then((data) => {
          this.montaBanner(data.data.data)
          setTimeout(() => {
            const loader = document.querySelectorAll('.banner--fade-in')
            loader.forEach((element) => {
              element.classList.add('banner--fade-in-loaded')
            })
          }, 600)
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
      products.forEach((item) => {
        produtos.push({
          name: item?.attributes?.name || '',
          img: item?.attributes?.photo?.data
            ? this.urlHostApi +
              this.montaUrlWebpImage(
                item?.attributes?.photo?.data[0]?.attributes?.url
              )
            : null,
          price: item?.attributes?.price || 0,
          code: item.attributes.code,
          url: item?.attributes?.url,
        })
      })

      this.productsDay.push(...produtos)
    },
    montaPaginacao(paginacao) {
      this.page = paginacao.pagination.page
        ? paginacao.pagination.page
        : this.page
      this.pageCount = paginacao.pagination.pageCount
        ? paginacao.pagination.pageCount
        : this.pageCount

      this.allLoaded = this.page === this.pageCount
      if (!this.allLoaded) this.page += 1
    },
    montaUrlWebpImage(url) {
      return url.replace('/uploads/', '/uploads/format_webp/')
    },
    montaBanner(banners) {
      const bannersArray = []

      if (banners?.attributes?.photo?.data) {
        banners.attributes.photo.data.forEach((itemBanner) => {
          bannersArray.push({
            image:
              this.urlHostApi +
              this.montaUrlWebpImage(itemBanner?.attributes?.url),
            name: itemBanner?.attributes?.name,
          })
        })
      }

      this.picturesCarroucel = bannersArray
    },
    handleScroll() {
      const totalPageHeight = document.body.scrollHeight
      const scrollPoint = window.scrollY + window.innerHeight

      if (scrollPoint >= totalPageHeight - 500) {
        this.carregaProdutosDia()
      }
    },
  },
}
</script>

<style>
.banner--fade-in-loaded {
  opacity: 1 !important;
}

.banner--fade-in {
  opacity: 0;
  transition: opacity 1.3s ease-in-out;
}

.content-principal {
  width: 100%;
  min-height: 713px;
}

.container-content {
  max-width: 1340px;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.container-carousel {
  width: 100%;
}

.produtos-dia {
  grid-gap: 12px;
}

.title-categorias {
  color: var(--secondary-background-color);
}

.image-container {
  max-width: 1200px;
  max-height: 350px;
}

.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
  display: none;
}

.p-carousel .p-carousel-indicators {
  padding: 0px;
  border-radius: -34%;
  width: 100%;
  max-width: 1200px;
}

@media only screen and (max-width: 600px) {
  .container-carousel {
    display: none !important;
  }
}
</style>
