<template>
  <div>
    <!-- <btn-inscribiteahora class="hidden md:block"></btn-inscribiteahora> -->
    <div class="bg-custom-black-fivo"></div>
    <div class="absolute bg-blue-custom w-100 inset-x-0">
      <div
        class="mx-4 sm:mx-20 md:mx-24 lg:ml-32 lg:mr-24 contenido flex flex-wrap items-start md:items-start md:content-center"
      >
        <div class="flex w-full flex-wrap">
          <!-- 1 -->
          <div class="w-full md:w-2/5 flex">
            <div class="relative w-full mr-4">
              <div class="py-2 md:pb-4 md:pt-2 title text-white text-3xl">FAQ</div>
              <div class="mb-3 line-grey relative"></div>
              <div v-if="faqsPaginate.length > 0" class="hidden md:block w-full faqs-slider">
                <carousel
                  :navigationEnabled="true"
                  :paginationEnabled="false"
                  :navigationNextLabel="`<div><img class='img-chevron' src='img/right-chevron.svg'></div>`"
                  :navigationPrevLabel="`<div><img class='img-chevron' src='img/left-chevron.svg'></div>`"
                  :per-page="1"
                  @transitionStart="pageChange"
                  class="w-full"
                >
                  <slide class="w-full" v-for="(fp,i) in faqsPaginate" :key="i">
                    <div
                      v-for="(p,i) in fp"
                      :key="i"
                      :class="{'active':p.id == active}"
                      class="item rounded mb-2"
                    >
                      <div
                        @click="setActive(p.id)"
                        class="header flex items-center text-white bg-gray-700 px-4 py-3"
                      >
                        <div class="pr-4 w-auto">
                          <!-- <img v-if="active != p.id" src="img/icon-plus.svg" alt="Abrir"> -->
                          <!-- <img v-else src="img/icon-minus.svg" alt="Cerrar"> -->
                          <div class="icon-plus" :class="{'active':p.id == active}">
                            <!-- <div class="circle"> -->
                            <!-- <div class="horizontal"></div> -->
                            <!-- <div class="vertical"></div> -->
                            <!-- </div> -->
                          </div>
                        </div>
                        <div class="text-sm">{{ p.pregunta }}</div>
                      </div>
                      <div class="block cuerpo text-sm text-white bg-gray-700">
                        <div v-html="p.respuesta" class="text-sm texto px-12 py-2"></div>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
              <!-- FAQS MOBILE -->
              <div class="block md:hidden w-full">
                <div
                  v-for="(p,i) in faqs"
                  :key="i"
                  :class="{'active':p.id == active}"
                  class="item rounded mb-2"
                >
                  <div
                    @click="setActive(p.id)"
                    class="header flex items-center text-white bg-gray-700 px-4 py-3"
                  >
                    <div class="pr-4 w-auto">
                      <div class="icon-plus" :class="{'active':p.id == active}"></div>
                    </div>
                    <div class="text-sm">{{ p.pregunta }}</div>
                  </div>
                  <div class="block cuerpo text-sm text-white bg-gray-700">
                    <div v-html="p.respuesta" class="text-sm texto px-12 py-2"></div>
                  </div>
                </div>
              </div>

              <div class="w-full">
                <a
                  href="/fivo"
                  class="btn-transparent btn-dudas px-5 py-4 rounded text-sm"
                >Resuelve tus dudas aquí</a>
              </div>
            </div>
          </div>
          <!-- Img -->
          <div class="hidden md:w-3/5 md:flex items-center">
            <div class="relative w-full mx-auto text-center">
              <img class="w-full xl:w-5/6 mx-auto" src="img/img_faq.png" alt="Faqs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      faqs: []
    }
  },
  created() {
    this.getPf()
  },
  computed: {
    heightImagen() {
      let h = 600
      if (process.client) {
        h =
          window.innerWidth > 800
            ? window.innerHeight - 80
            : window.innerHeight - window.innerHeight * 0.08
      }
      return { height: `${h}px` }
    },
    faqsPaginate() {
    //   return _.chunk(this.faqs, 5)
        return this.chunkArray(this.faqs,5);
    }
  },
  methods: {
    getPf() {
      this.faqs = [
        {
          id: 1,
          pregunta: 'Cuánto vale entrenar un día?',
          respuesta:
            'Sólo vas a venir un día?? Bueno, si es por trabajo lo entendemos. Un pase de un día cuesta 7,90 euros. Puedes tramitarlo a través de la página web. <a href="www.fibogym.es">www.fibogym.es. </a>'
        },
        {
          id: 2,
          pregunta: '¿Quiero inscribirme, qué debo hacer?',
          respuesta:
            'Muy sencillo: entra en nuestra web, sigue los pasos que se te indican y… ven!! Si aún así no te aclaras, acude al gimnasio en horario comercial y nuestros recepcionistas te ayudarán a hacerlo.  Una vez realizada la inscripción, para poder acceder al gimnasio, tendrás que formalizarla en horario comercial.'
        },
        {
          id: 3,
          pregunta: '¿Qué cuotas tiene el gimnasio?',
          respuesta:
            'Hay tres maneras de unirte a FIVO: \nUna cuota mensual de 38,90 € durante 12 meses, la cual podrás cancelar en cualquier momento.\nUna cuota ahorro de un solo pago por 12 meses por 399 € (supone un ahorro de 117,9 € al año)\nUna entrada de un día por 7,90 €'
        },
        {
          id: 4,
          pregunta: 'Tienen pases por dias?',
          respuesta: 'Si,tenemos pases para 1 dia, 3 dias, 5 dias y 15 dias.'
        },
        {
          id: 5,
          pregunta: 'Hay parking en la zona?',
          respuesta: 'Si, hay dos estacionamientos'
        },
        {
          id: 6,
          pregunta: 'A que hora abren?',
          respuesta: 'Esta abierto las 24 horas del dia'
        }
      ]
      // axios.get('/api/preguntasfrecuentes').then(res => {
      //     this.faqs = res.data.preguntas;
      // });
    },
    pageChange(e) {
      // this.active = 0;
    },
    chunkArray(myArray, chunk_size) {
      var index = 0
      var arrayLength = myArray.length
      var tempArray = []

      for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size)
        // Do something if you want with the group
        tempArray.push(myChunk)
      }

      return tempArray
    },
    setActive(id) {
      if (this.active == id) this.active = 0
      else this.active = id
    }
  }
}
</script>
<style lang="scss" scoped>
.subtitle {
  line-height: 1.4;
}

.faqs-slider .VueCarousel-navigation {
   position: absolute;
   width: auto;
   height: auto;
   top: -60px;
   right: 0px;
   transform: none !important;
   display: flex;
   flex-wrap: wrap;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
 }

 .faqs-slider .VueCarousel-navigation-button {
   position: relative !important;
   top: auto !important;
   left: auto !important;
   transform: none !important;
   margin-right: 0 !important;
   -webkit-appearance: none;
 }
 
 @media(max-width: 800px) {
   .faqs-slider .VueCarousel-navigation {
     top: -55px;
     right: -8px;
   }
 }

.bg-custom-black-fivo {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  background-color: #000f23;
}

.line-grey {
  width: 100%;
  height: 1px;
  position: relative;
  background-color: #8e8e8e;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 3px;
    height: 3px;
    background: #fff;
  }
}

// .contenido {
//   height: calc(100vh - 55px);
//   @media (max-width: 576px) {
//     height: calc(100vh - 10px);
//   }
//   // margin-top: 55px;
// }

// SCROLLBAR

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #350079;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(228, 228, 228);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(194, 194, 194);
}

.item {
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  .header {
    // background: #3d4852;
    cursor: pointer;
    z-index: 2;
    position: relative;
    img {
      max-width: 1.2rem;
      // position: absolute;
      // left: 2%;
    }
  }
  .cuerpo {
    // height: 0;
    overflow: hidden;
    position: relative;
    // transition: all 0.3s ease;
    .texto {
      margin-top: -100%;
      transition: all 0.3s ease-out;
      // opacity: 0;
    }
  }
  &.active {
    .cuerpo {
      // height: auto;
      // position: relative;
      // overflow: hidden;
      .texto {
        margin-top: 0;
        // opacity: 1;
        // top: 0;
      }
    }
  }
}

.btn-dudas {
  position: relative;
  min-width: 140px;
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  padding: 1rem 1.25rem;
  color: #edeff0;
  border: 1px solid #969696;
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 5%;
    width: 20%;
    height: 2px;
    background-color: #dfdfdf;
  }
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    right: 5%;
    width: 20%;
    height: 2px;
    background-color: #dfdfdf;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
}

// Button PLUS and MINUS
.icon-plus {
  position: relative;
  width: 15px;
  height: 15px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: rgb(218, 218, 218);
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 3px;
    height: 100%;
    margin-left: -2px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    margin-top: -1px;
  }

  &.active {
    cursor: pointer;

    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
}
</style>

