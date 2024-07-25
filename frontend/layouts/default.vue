<template>
  <div>
    <client-only>
      <Toast />
    </client-only>
    <CpMenu :logo="logo" @buscar-product="buscarProduto" />
    <Nuxt />
    <CpFooter />
  </div>
</template>
<script>
import logo from '~/static/logo3.png'
export default {
  name: 'LayoutDefault',
  data() {
    return {
      logo: {
        img: logo,
        alt: 'Generic Logo',
      },
    }
  },
  computed: {},
  watch: {
    $route() {
      this.$toast.removeAllGroups()
    },
  },
  created() {},
  methods: {
    buscarProduto(produto) {
      this.$router.push({ path: 'buscar', query: { product: produto } })
    },
  },
}
</script>

<style scoped></style>
