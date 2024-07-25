<template>
  <Card class="product p-0">
    <template #content>
      <div class="col-12 pb-0">
        <a :href="url" class="pb-0">
          <img
            :src="img"
            :alt="name"
            class="product__img border-round-3xl col-12 pb-0"
          />
        </a>
      </div>
      <div class="col-12 pt-0 mt-0">
        <a :href="url" class="text-center">
          <h3 class="product__title">{{ name }}</h3>
        </a>
      </div>
      <div class="col-12 pb-3">
        <h4 class="product__price">{{ precoBr }}</h4>
      </div>
      <div class="col-12 text-center">
        <a :href="url" target="_blank">
          <Button label="Ir para loja" class="p-button-rounded p-button-help" />
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
}
</script>

<style>
.product__title {
  color: var(--color-text-primary);
  display: -webkit-box;
  display: -webkit-box;
  font-size: 15px;
  font-weight: 600;
  height: 37px;
  margin: 5px 5px 0px;
  margin-bottom: 12px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.p-card .p-card-body {
  padding: 0px !important;
}

.p-card .p-card-content {
  padding: 0px !important;
}

.product__price {
  color: var(--background-color);
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
}

.product:hover {
  border-bottom: 4px solid var(--background-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 150ms ease-in-out;
  transform: scale(1.01);
}

.product {
  border-radius: 10px;
  height: 450px;
  overflow: hidden;
  width: 284px;
}

.product__img {
  max-height: 252px;
  max-width: 252px;
}

@media (max-width: 600px) {
  .product {
    border-radius: 10px;
    height: 352px;
    overflow: hidden;
    width: 170px;
  }
}
</style>
