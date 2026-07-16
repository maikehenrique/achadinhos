<template>
  <div>
    <client-only>
      <Toast />
    </client-only>
    <CpMenu :logo="logo" @buscar-product="buscarProduto" />
    <Nuxt />
  </div>
</template>

<script>
import logo from '~/static/logo.webp'
export default {
  name: 'LayoutMinimal',
  data() {
    return {
      logo: {
        img: logo,
        alt: 'Achadinhos da Internet',
      },
    }
  },
  methods: {
    buscarProduto(produto) {
      this.$router.push({ path: '/', query: { product: produto } })
    },
  },
}
</script>
