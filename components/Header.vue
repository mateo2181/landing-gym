<template>
  <div :class="{'bg-blue-custom': urlhash != ''}" class="menu-header">
    <!-- Fondo header para página inicio -->
    <!-- <div v-if="urlhash == ''" class="bg-custom-black"></div> -->
    <!-- <div v-if="urlhash == ''" class="bg-custom-grey"></div> -->

    <div class="logo-mobile">
      <img src="img/logo.svg" alt />
    </div>

    <div @click="mobileMenuVisible = true" class="cursor-pointer btn-hamburguer">
      <span class="hamburger-box">
        <span :class="colorHamb" class="hamburger-inner"></span>
      </span>
    </div>

    <div :class="{'active':mobileMenuVisible}" class="menu-mobile">
      <div
        class="px-3 pb-2 pt-3 sm:pt-4 flex justify-between header-mobile border-b border-grey-darkest"
      >
        <div class="logo-menu-mobile">
          <img src="img/logo.svg" alt />
        </div>
        <a @click="mobileMenuVisible = false" class="btn-close">
          <i class="fa fa-close fa-2x text-white"></i>
        </a>
      </div>
      <div class="items text-center block">
        <div class="item block">
          <!-- <a @click="mobileMenuVisible = false" href="#home">Inicio</a> -->
          <nuxt-link @click.native="mobileMenuVisible = false" to="/">Inicio</nuxt-link>
        </div>
        <div class="item block">
          <nuxt-link @click.native="mobileMenuVisible = false" to="/fivo">Fivo</nuxt-link>
        </div>
        <div class="item block">
          <!-- <a @click="mobileMenuVisible = false" href="#planes">Planes</a> -->
          <nuxt-link @click.native="mobileMenuVisible = false" to="/planes">Planes</nuxt-link>
        </div>
        <div class="item block">
          <!-- <a @click="mobileMenuVisible = false" href="#planes">Planes</a> -->
          <nuxt-link @click.native="mobileMenuVisible = false" to="/burn">Burn</nuxt-link>
        </div>
        <div class="item block">
          <nuxt-link @click.native="mobileMenuVisible = false" to="/entrenamiento">Entrenamiento</nuxt-link>
        </div>
        <div class="item block">
          <!-- <a @click="mobileMenuVisible = false" href="#contacto">Contacto</a> -->
          <nuxt-link @click.native="mobileMenuVisible = false" to="/contacto">Contacto</nuxt-link>
        </div>
        <div class="item block">
          <!-- <a @click="mobileMenuVisible = false" href="#home">FAQ</a> -->
          <nuxt-link @click.native="mobileMenuVisible = false" to="/faqs">FAQ</nuxt-link>
        </div>

        <!-- <div class="item-btn block mt-4">
          <a class="cursor-pointer inline-flex btn btn-transparent btn-comollegar rounded">Como llegar</a>
        </div>-->
        <div class="item-btn block mt-2">
          <a
            class="cursor-pointer inline-flex btn btn-yellow-degree btn-inscripcion-mobile rounded"
          >Inscribite ahora</a>
        </div>
        <div class="mt-6 flex justify-center social-icons">
          <a href>
            <img class="img-face" :src="`img/social/facebook-w.png`" alt="Facebook" />
          </a>
          <a href>
            <img class="img-tw" :src="`img/social/twitter-w.png`" alt="Twitter" />
          </a>
          <a href>
            <img class="img-ins" :src="`img/social/instagram-w.png`" alt="Instagram" />
          </a>
        </div>
        <!-- <div class="mt-6 block">
          <div class="text-yellow fs8">hola@fivogym.es</div>
        </div>-->
        <div class="text-gray-600 mt-4 text-xs">
          <div>Atención al cliente</div>
          <div>Lun a Vie: 8:00 - 12:00 &bull; 16:00 - 20:00</div>
          <div>* Excepto dias festivos</div>
        </div>
        <div class="pt-2 pb-2 block">
          <nuxt-link class="fs8 text-white no-underline" @click.native="mobileMenuVisible = false" to="/privacidad">Términos y condiciones</nuxt-link>
        </div>
        <div class="flex justify-center">
          <div class="text-white fs8 pr-1">Copyright &copy;</div>
          <div class="text-yellow fs8">Fivo {{ year }}</div>
        </div>
      </div>
    </div>
    <!-- Menu escritorio -->
    <div class="menu-desktop fixed z-30 w-full">
      <div class="header">
        <div class="flex h-full nav-header justify-between items-center">
          <div>
            <img class="logo" src="img/logo.svg" alt />
          </div>
          <div class="w-auto flex justify-center">
            <nuxt-link class="item-header" to="/">Inicio</nuxt-link>
            <nuxt-link class="item-header" to="/fivo">Fivo</nuxt-link>
            <nuxt-link class="item-header" to="/planes" >Planes</nuxt-link>
            <nuxt-link class="item-header" to="/burn">Burn</nuxt-link>
            <nuxt-link class="item-header" to="/entrenamiento">Entrenamiento</nuxt-link>
            <nuxt-link class="item-header" to="/faqs">FAQ</nuxt-link>
            <nuxt-link class="item-header" to="/contacto">Contacto</nuxt-link>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
      urlhash: '',
      colorHamb: ''
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  created() {
    this.getColorHamb()
  },
  watch: {
    $route(to, from) {
      this.getColorHamb()
    }
  },
  methods: {
    getColorHamb() {
      if (process.client) {
        this.urlhash = window.location.pathname.replace('/', '')
        console.log(this.urlhash)
        switch (this.urlhash) {
          case 'home':
            this.colorHamb = 'bg-black-hamb'
            break
          case '':
            this.colorHamb = 'bg-black-hamb'
            break
          case 'fivo':
            this.colorHamb = 'bg-white-hamb'
            break
          case 'entrenamiento':
            this.colorHamb = 'bg-white-hamb'
            break
          case 'planes':
            this.colorHamb = 'bg-white-hamb'
            break
          case 'contacto':
            this.colorHamb = 'bg-white-hamb'
            break
          case 'diasgratis':
            this.colorHamb = 'bg-white-hamb'
            break
          default:
            this.colorHamb = 'bg-white-hamb'
            break
        }
      }
    },
    clickHandler(route) {
      this.$router.replace(route)
    }
  }
}
</script>

<style lang="scss" scoped>

a.nuxt-link-exact-active {
  color: var(--color-yellow);
  &::after {
    content: '';
    position: absolute;
    width: 70%;
    // height: 100%;
    bottom: 0;
    left: 50%;
    transition: all 0.5s ease;
    transform: translateX(-50%);
    border-bottom: 2px solid var(--color-yellow);
  }
  
}

.logo {
  min-width: 6rem;
  max-width: 6rem;
  position: relative;
  margin-left: 25px;
  // position: absolute;
  // left: 3%;
  // top: 50%;
  // transform: translateY(-50%);
}

.nav-header::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom: 0.5px solid #4a5564;
}

.header {
  z-index: 20;
  width: 100%;
}

.logo-mobile {
  display: none;
  min-width: 6rem;
  max-width: 6rem;
  position: absolute;
  left: 3%;
  top: 16px;
  z-index: 50;
}
.btn-hamburguer {
  display: none;
  position: absolute;
  right: 12px;
  top: 20px;
  z-index: 50;
}
.menu-mobile {
  display: none;
}

.bg-black {
  background-color: #000f23;
}

.social-icons {
  a {
    padding: 0 10px;
    img.img-tw {
      max-width: 1.8rem;
    }
    img.img-face {
      max-width: 0.8rem;
    }
    img.img-ins {
      max-width: 1.3rem;
    }
  }
}

.cookies .menu-header {
  width: 100%;
  height: 70px;
  z-index: 9999;
  display: block;
  position: fixed;
  top: 59px;
}

@media (max-width: 800px) {
  .bg-custom-black,
  .bg-custom-grey {
    height: 70px;
  }

  .menu-header {
    width: 100%;
    height: 70px;
    z-index: 9999;
    display: block;
    position: fixed;
    top: 0;
  }

  .cookies .menu-header {
    top: 59px;
  }

  .menu-header::after {
    content: '';
    position: absolute;
    width: 90%;
    left: 50%;
    top: -1%;
    transform: translateX(-50%);
    height: 100%;
    // border-bottom: 0.5px solid #4A5564;
  }

  .menu-desktop {
    display: none;
  }
  .btn-hamburguer,
  .logo-mobile {
    display: block;
  }
  .menu-mobile {
    display: block;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin-right: -100%;
    overflow-y: hidden;
    background: #000f23;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &.active {
      width: 100%;
      margin-right: 0;
    }

    // .btn-close {
    //   position: absolute;
    //   right: 12px;
    //   top: 16px;
    //   cursor: pointer;
    // }

    .logo-menu-mobile {
      min-width: 6rem;
      max-width: 6rem;
    }

    .items {
      padding: 1rem 2rem;
      > div.item {
        color: white;
        padding-top: 1rem;
        padding-bottom: 1.2rem;
        font-size: 0.9rem;
        a {
          color: white;
          font-size: 0.9rem;
          padding-bottom: 0.3rem;
          text-decoration: none;
          position: relative;
          transition: all 0.5s ease-out;
          &.nuxt-link-exact-active {
            color: var(--color-yellow);
            // border-bottom: 1px solid var(--color-yellow);
          }
          &:hover {
            padding-bottom: 0.25rem;
            color: var(--color-yellow);
            border-bottom: 1px solid var(--color-yellow);
          }
        }
      }

      .btn-inscripcion-mobile {
        padding: 1rem 2rem;
        min-width: 153px;
        text-align: center;
        font-size: 0.8rem;
      }

      .btn-comollegar {
        padding: 1rem 2.5rem;
        border: 1px solid #8f8e8e;
        min-width: 153px;
        text-align: center;
        color: white;
        font-size: 0.8rem;
      }
    }
  }
}

@media (max-width: 550px) {
  .menu-mobile {
    .items {
      padding: 1rem 3rem !important;
      > div.item {
        padding-top: 0.7rem !important;
        padding-bottom: 0.7rem !important;
      }
    }
  }

  .btn-hamburguer {
    right: 4%;
  }

  .cookies .menu-header {
    top: 81px;
  }
}
</style>

