<template>
  <Card class="product p-0">
    <template #content>
      <div class="col-12 pb-0 md:p-4 product__image-content">
        <a :href="url" class="pb-0">
          <img
            :src="img"
            :alt="name"
            class="product__img border-round-3xl col-12 pb-0"
          />
        </a>
      </div>
      <div class="col-12 pt-0 mt-0 product__title-content">
        <a :href="url" class="text-center">
          <h3 class="product__title">{{ name }}</h3>
        </a>
      </div>

      <div class="col-12 pb-3 product__price-content">
        <h4 class="product__price">{{ precoBr }}</h4>
      </div>
      <div class="col-12 text-center product__link-content">
        <a :href="url" target="_blank">
          <Button label="Ir para loja" class="p-button p-button-help w-full" />
        </a>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: 'CpProduct',
  props: {
    img: {
      type: String,
      default: null,
    },
    code: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      default: null,
    },
  },
  computed: {
    precoBr() {
      return this.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    },
  },
  mounted() {},
}
</script>

<style>
.product {
  border-radius: 20px;
  box-shadow: 0px 5px 25px -26px black;
  height: 450px;
  overflow: hidden;
  width: 284px;
  transition: all 0.5s;
}

.product__title {
  color: rgb(66, 70, 77);
  display: -webkit-box;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  height: 37px;
  margin: 5px 5px 0px;
  margin-bottom: 12px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.p-card .p-card-body {
  padding: 0px !important;
  height: 100%;
}

.p-card .p-card-content {
  padding: 0px !important;
  height: 100%;
}

.product__price {
  color: #0fb930;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
}

.product:hover {
  margin-top: -6px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.5s;
}

.product--fade-in-loaded {
  opacity: 1 !important;
}

.product__img {
  height: 100%;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 1.3s ease-in-out;
}

.product__image-content {
  text-align: center;
  height: 60%;
}

.product__title-content {
  height: 10%;
}

.product__price-content {
  height: 10%;
}

.product__link-content {
  height: 10%;
}

@media (max-width: 600px) {
  .product {
    border-radius: 10px;
    height: 400px;
    overflow: hidden;
    width: 170px;
  }

  .product__img {
    height: auto;
  }
}
</style>
