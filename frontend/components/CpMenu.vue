<template>
  <div class="nav">
    <div class="nav__content">
      <input id="nav__check" type="checkbox" />
      <div class="nav__content__logo">
        <div class="nav__logo__link">
          <a href="/">
            <img class="nav__logo" :src="logo.img" />
          </a>
        </div>
      </div>
      <div class="nav__btn">
        <label for="nav__check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav__search">
        <div class="col-12">
          <span class="p-input-icon-right w-full">
            <i
              class="pi pi-search pl-3 pr-4"
              style="cursor: pointer"
              @click="buscar"
            />
            <InputText
              v-model="inputBuscar"
              type="text"
              placeholder="Pesquisar"
              class="w-full border-round-3xl"
              @keyup.enter="buscar"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: Object,
      default: () => {
        return {
          img: 'logo3.png',
          alt: 'Logo',
        }
      },
    },
  },
  data() {
    return {
      inputBuscar: '',
    }
  },

  methods: {
    showMenu() {
      const burger = document.querySelector('.burger')
      const nav = document.querySelector('.nav__search')
      const navLinks = document.querySelectorAll('.nav__search li')
      nav.classList.toggle('nav-active')

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`
        }
      })

      burger.classList.toggle('toggle')
    },
    buscar() {
      const showMenuMobile = document.getElementById('nav__check')
      showMenuMobile.checked = false
      this.$emit('buscar-product', this.inputBuscar)
    },
  },
}
</script>
<style>
.nav {
  background-color: var(--background-color);
  height: 90px;
  position: relative;
  width: 100%;
  z-index: 100;
}

.nav > .nav__content > .nav__content__logo {
  display: inline;
  width: 16%;
}

.nav > .nav__content > .nav__content__logo > .nav__logo__link {
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 22px;
  height: 90px;
  padding: 0px 10px 0px 10px;
}

.nav > .nav__content > .nav__btn {
  display: none;
}

.nav > .nav__content > .nav__search {
  align-items: center;
  display: flex;
  font-size: 18px;
  width: 60%;
}

.nav > .nav__content > .nav__search > a {
  color: #efefef;
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
}

.nav > .nav__content > .nav__search > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > .nav__content > #nav__check {
  display: none;
}

.nav__logo {
  width: 100%;
}

.nav__content {
  display: flex;
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
}

@media (max-width: 600px) {
  .nav > .nav__content > .nav__content__logo {
    width: 100%;
  }

  .nav > .nav__content > .nav__btn {
    align-items: center;
    display: flex;
    justify-content: right;
    width: 84%;
  }

  .nav > .nav__content > .nav__btn > label {
    display: inline-block;
    height: 50px;
    padding: 13px;
    width: 50px;
  }

  .nav > .nav__content > .nav__btn > label:hover,
  .nav > .nav__content > #nav__check:checked ~ .nav__btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > .nav__content > .nav__btn > label > span {
    border-top: 2px solid #eee;
    display: block;
    height: 10px;
    width: 25px;
  }

  .nav > .nav__content > .nav__search {
    align-items: start;
    background-color: #881cc3;
    display: flex;
    height: 0px;
    left: 0px;
    overflow-y: hidden;
    position: absolute;
    transition: all 0.3s ease-in;
    top: 90px;
    width: 100%;
  }

  .nav > .nav__content > .nav__search > a {
    display: block;
    width: 100%;
  }

  .nav > .nav__content > #nav__check:not(:checked) ~ .nav__search {
    height: 0px;
  }

  .nav > .nav__content > #nav__check:checked ~ .nav__search {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
