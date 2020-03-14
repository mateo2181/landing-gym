<template>
  <div>
    <!-- <btn-inscribiteahora class="hidden md:block"></btn-inscribiteahora> -->
    <div class="bg-custom-black-fivo"></div>
    <div class="absolute bg-blue-custom w-100 left-0 right-0">
      <transition
        :enter-active-class="seccionActive == 0 ? 'animated fadeInRight' : 'animated fadeInLeft'"
        :leave-active-class="seccionActive == 0 ? 'animated fadeOutLeft' : 'animated fadeOutRight'"
        :duration="{ enter: 1000, leave: 400 }"
      >
        <!-- FIVO -->
        <div
          :key="1"
          v-if="seccionActive == 0"
          class="contenido flex flex-wrap items-start sm:items-center content-center"
        >
          <div class="flex w-full flex-wrap items-center content-center">
            <!-- 1 -->
            <div class="mt-0 md:mt-6 w-full md:w-2/5 mb-0 md:mb-4">
              <div class="relative mx-6 sm:mx-12 md:mr-0 md:ml-16 lg:ml-24 xl:ml-32">
                <div class="my-4 title text-white text-3xl">Fivo</div>
                <div class="relative line-grey"></div>
                <div class="hidden md:flex my-2 sm:my-4 subtitle text-white text-xs fivo-slider">
                  <carousel
                    :navigationEnabled="true"
                    :paginationEnabled="false"
                    :navigationNextLabel="`<div><img class='img-chevron' src='img/right-chevron.svg'></div>`"
                    :navigationPrevLabel="`<div><img class='img-chevron' src='img/left-chevron.svg'></div>`"
                    @pageChange="pageChange"
                    :per-page="1"
                    class="w-full"
                  >
                    <!-- Texto -->
                    <slide class="caracteristicas flex md:flex-wrap w-full">
                      <div class="w-full text-sm text-white">
                        {{ textoFivo }}
                      </div>
                    </slide>
                    <!-- Img fivo -->
                    <slide class="caracteristicas flex md:flex-wrap w-full">
                      <div class="w-1/2" v-for="(o,i) in caracteristicas.slice(0,8)" :key="i">
                        <div class="m-1">
                          <div class="caracteristica relative mx-auto p-1">
                            <img class="w-1/3 md:w-1/4 lg:w-1/5 mx-auto" :src="o.img" :alt="o.title">
                            <div class="pl-2 my-1 w-2/3 md:w-3/4 text-gray-400 title">{{ o.title }}</div>
                          </div>
                        </div>
                      </div>
                    </slide>
                  </carousel>
                </div>
                <div class="my-2 sm:my-6 w-100 hidden md:flex">
                  <div class="w-2/3 pr-3">
                    <button @click="instalacionesVisible = true"
                      class="w-full btn btn-border-white py-4 rounded text-sm">Ver instalaciones</button>
                  </div>
                  <!--
                  <div class="w-1/2">
                    <button
                      class="w-full btn btn-instalaciones btn-transparent btn-instalaciones py-4 rounded-lg text-sm"
                    >Instalaciones</button>
                  </div>-->
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="w-full md:w-3/5 my-2 md:mb-4">
              <div class="relative mx-6 md:ml-2 md:mr-24 lg:ml-0 lg:mr-32">
                <!-- Carousel Desktop -->
                <div class="w-full hidden md:block">
                  <img class="w-full" src="img/fivo2.svg" alt="Fivo Image">
                </div>

                <!-- Carousel Mobile -->
                <div class="w-full mt-2 flex md:hidden fivo-slider">
                  <carousel
                    :navigationEnabled="true"
                    :paginationEnabled="false"
                    :navigationNextLabel="`<div><img class='img-chevron' src='img/right-chevron.svg'></div>`"
                    :navigationPrevLabel="`<div><img class='img-chevron' src='img/left-chevron.svg'></div>`"
                    @pageChange="pageChange"
                    :per-page="1"
                    class="w-full"
                  >
                    <!-- Lista elementos -->
                    <slide class="w-full">
                      <div class="w-full text-sm pt-4 text-white">
                        {{ textoFivo }}
                    </div>
                      <div class="caracteristicas block pt-4 relative">
                        <div class="w-4/5" v-for="(o,i) in caracteristicas" :key="i">
                          <div class="mb-2">
                            <div class="caracteristica relative mx-auto p-1 text-left">
                              <img class="text-yellow" :src="o.img" :alt="o.title">
                              <div class="my-1 pl-2 w-4/5 text-gray-400 title">{{ o.title }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </slide>
                    
                  </carousel>
                </div>

                <div class="w-2/3 block md:hidden">
                    <button @click="instalacionesVisible = true"
                      class="w-full btn btn-border-white py-4 rounded text-sm">Ver instalaciones</button>
                  </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>

        <!-- HORARIOS -->
        <!-- <div :key="2" v-if="seccionActive == 1" class="mx-4 sm:mx-20 md:mx-24 lg:mx-32 contenido flex flex-wrap items-start md:items-end content-end md:content-end">
            <fivo-horarios @seccion="seccionActive = 0" ></fivo-horarios>
        </div>-->
      </transition>
    </div>
    <transition :enter-active-class="'animated fadeInUp'" :leave-active-class="'animated fadeOutDown'">
      <Instalaciones @close="instalacionesVisible = false" v-if="instalacionesVisible" />
    </transition>
  </div>
</template>

<script>
import Instalaciones from '~/pages/fivo/instalaciones.vue';
export default {
  data() {
    return {
      textoFivo: `Con acceso 24/7 Fivo es un gimnasio innovador y enfocado al futuro. Disponible en más de 2000 metros cuadrados, encontrarás una nueva forma de entrenar donde te ofrecemos gran amplitud de espacios con zonas específicas de CrossFit, una zona de musculación con más de 100 puestos de trabajo tanto para el ejercicio con peso libre o de selección asistida. 
                  La luz, el sonido y la imagen transformarán la manera de entrenar tal y como ahora la conoces. Studio Cycling te sorprenderá con sus luces psicodélicas; Studio On Live te permitirá disfrutar de las mejores actividades Les Mills con entrenadores; la pantalla led gigante de Studio Virtual te facilitará entrenar con una experiencia inigualable y en cualquier momento del día… Y por último nuestro exclusivo Studio Burn, una actividad que con tan solo 30 minutos hará que quemes calorías hasta 36 horas después de tu último entreno. 
                  Vestuarios equipados con taquillas con zona privada para cambiadores y duchas completarán tu experiencia en FIVO a la hora que quieras.`,
      seccionActive: 0,
      instalacionesVisible: false,
      btnActive: false,
      imgSelected: 0,
      caracteristicas: [
        {
          img: "img/iconos/icon5-y.png",
          title: "Entrenamiento Virtual"
        },
        {
          img: "img/iconos/icon1-y.png",
          title: "Duchas individuales"
        },
        {
          img: "img/iconos/icon6-y.png",
          title: "Entrenamientos de HIT con tarjeta"
        },
        {
          img: "img/iconos/icon2-y.png",
          title: "Aparcamiento de motos"
        },
        {
          img: "img/iconos/icon7-y.png",
          title: "Entrenamientos en circuito con tarjeta"
        },
        {
          img: "img/iconos/icon3-y.png",
          title: "Abierto 24 horas"
        },
        {
          img: "img/iconos/icon8-y.png",
          title: "Entrenamientos por objetivo con tarjeta"
        },
        {
          img: "img/iconos/icon4-y.png",
          title: "Vestuarios equipados"
        }
      ]
    };
  },
  components: {
      Instalaciones
  },
  created() {
    // this.getEventos();
    setTimeout(() => {
      this.btnActive = true;
    }, 500);
  },
  methods: {
    pageChange(e) {
      console.log(e);
      this.imgSelected = e;
    }
  }
};
</script>
<style lang="scss" scoped>
.bg-custom-black-fivo {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: #000f23;
}

.btn-instalaciones {
  border: 1px solid #8f8e8e;
  text-align: center;
  color: white;
}

.line-grey {
  width: 100%;
  height: 1px;
  background-color: #8e8e8e;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -1px;
    width: 3px;
    height: 3px;
    background: #fff;
  }
}

// .contenido {
//   height: calc(100vh - 70px);
//   margin-top: 61px;
//   @media (max-width: 800px) {
//     height: auto;
//   }
// }

.subtitle {
  line-height: 1.4;
}

.caracteristicas {
  .title {
    font-size: 0.8rem;
  }
  img {
    max-width: 100px;
    @media (max-width: 800px) {
      max-width: 50px;  
    }
  }
  .caracteristica {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-out;
  }
}
</style>

