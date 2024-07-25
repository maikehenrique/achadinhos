<template>
  <div class="content-principal">
    <div class="container-content pt-4">
      <div class="container-carousel">
        <Carousel
          :value="picturesCarroucel"
          :num-visible="1"
          :num-scroll="1"
          :circular="true"
          :autoplay-interval="5000"
        >
          <template #item="slotProps">
            <div class="mb-3">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="border-round-3xl col-12 image-container"
              />
            </div>
          </template>
        </Carousel>
      </div>
      <div class="container-achadin-dia">
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
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3,
        },
        {
          breakpoint: '600px',
          numVisible: 0,
          numScroll: 0,
        },
        {
          breakpoint: '480px',
          numVisible: 1,
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
  methods: {
    async carregaProdutosDia() {
      await this.$api
        .buscarProdutoDiaApi()
        .then((data) => {
          this.montaProdutos(data.data.data)
        })
        .catch((error) => {
          const mensagem =
            error?.response && error?.response?.data
              ? error?.response?.data?.error.message
              : error
          this.$messager.Error(this.$translateError(mensagem))
        })
    },
    async carregaBanners() {
      await this.$api
        .buscarBannerApi()
        .then((data) => {
          this.montaBanner(data.data.data)
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
              item?.attributes?.photo?.data[0]?.attributes?.url
            : null,
          price: item?.attributes?.price || 0,
          url: item?.attributes?.url,
        })
      })

      this.productsDay = produtos
    },
    montaBanner(banners) {
      const bannersArray = []

      if (banners?.attributes?.photo?.data) {
        banners.attributes.photo.data.forEach((itemBanner) => {
          bannersArray.push({
            image:
              this.urlHostApi + itemBanner?.attributes?.formats?.large?.url,
            name: itemBanner?.attributes?.name,
          })
        })
      }

      this.picturesCarroucel = bannersArray
    },
  },
}
</script>

<style>
.content-principal {
  width: 100%;
  background-color: #faf5f8;
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
  color: #737b97;
}

.image-container {
  max-width: 1200px;
  max-height: 320px;
}

.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
  display: none;
}

.p-carousel .p-carousel-indicators {
  padding: 0px;
  border-radius: -34%;
  position: absolute;
  top: 407px;
  width: 100%;
  max-width: 1200px;
}

@media (max-width: 600px) {
  .container-carousel {
    display: none;
  }
}
</style>
