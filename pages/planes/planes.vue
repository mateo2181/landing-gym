<template>
  <!-- Vista de los planes -->
  <div>
    <div class="w-full hidden md:flex flex-wrap">
      <!-- <div class="w-3/5 flex"> -->
      <div
        class="plan w-1/3 md:w-1/3 px-2 cursor-pointer"
        :class="{'active': (plan && p.id === plan.id)}"
        v-for="(p,i) in planesFiltrados"
        :key="i"
      >
        <div class="w-full bg-white shadow rounded px-2 pb-2 md:px-4">
          <div class="pt-4 plan-recuadro text-center mx-2 md:mx-8">
            <img class="w-full" :src="`img/planes/plan-${i+1}.svg`" alt="Imagen plan">
          </div>
          <div class="w-full">
            <div class="mt-1 md:mt-2 text-dark w-full text-base text-center">{{ p.nombre }}</div>

            <div class="pt-4 text-dark w-full text-xl lg:text-2xl text-center font-bold">
              <span class="precio-plan" v-if="p.pagoMensual > 0">{{ p.pagoMensual }} &euro;</span>
              <span class="precio-plan" v-else>{{ p.pagoUnico }} &euro;</span>
            </div>
          </div>

          <!-- Caracteristicas -->
          <div class="pt-4 flex flex-wrap w-full relative">
            <!-- 1 -->
            <div v-for="(c,i) in p.caracteristicas" :key="i" class="w-full">
              <div class="w-full pb-1">
                <span v-if="c.tieneCaracteristica">
                  <img class="icon-check" src="img/check_circle_black.svg" alt="Check image">
                </span>
                <!-- <span v-else> <img class="icon-check" src="img/check.svg" alt="Check image"> </span> -->
                <span class="text-dark text-xs">{{ c.caracteristica.nombre }}</span>
              </div>
            </div>
          </div>

          <!-- Condiciones -->
          <div class="py-4 text-xs text-dark w-full">
            <div class="pb-2">Condiciones:</div>
            <div class>Contrato a 1 mes.</div>
            <div class>Cancelación con aviso previo a 30 días antes de la fecha de cobro.</div>
          </div>

          <!-- Button -->
          <div class="w-full px-2">
            <button
              :class="[(i%2 == 0) ? 'btn-par' : 'btn-yellow-degree btn-impar']"
              class="btn mt-2 py-4 block rounded text-sm w-full"
              @click="selectPlan(p)"
            >Seleccionar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- PLANS MOBILE -->
    <div class="flex flex-wrap md:hidden plans-slider mb-3">

      <div class="w-full flex">
        <div v-for="(p,r) in planesFiltrados" :key="r" class="w-1/3 mx-1 mb-3">
          <div class="w-full text-center bg-white text-black py-2 rounded text-sm" 
               :class="{'text-white bg-primary border-white border': swiper.activeIndex == r}">
           {{ p.nombre }}
           </div>
        </div>
      </div>
      
      <!-- SLIDER -->
      <swiper class="mt-3" :options="swiperOption" ref="swiper">
        <!-- slides -->
        <swiper-slide v-for="(p,r) in planesFiltrados" :key="r" class="h-full w-full">
              <div class="plan w-full cursor-pointer">
                <div class="w-full bg-white shadow rounded pb-2">
                  <div class="pt-4 plan-recuadro text-center mx-2 md:mx-8">
                    <img class="w-3/5" :src="`img/planes/plan-${r+1}.svg`" alt="Imagen plan">
                  </div>
                  <div class="w-full">
                    <div class="mt-1 md:mt-2 text-dark w-full text-uppercase bold text-base text-center">{{ p.nombre }}</div>

                    <div class="pt-4 text-dark w-full text-2xl text-center font-bold">
                      <span class="precio-plan" v-if="p.pagoMensual > 0">{{ p.pagoMensual }} &euro;</span>
                      <span class="precio-plan" v-else>{{ p.pagoUnico }} &euro;</span>
                    </div>
                  </div>

                  <!-- Caracteristicas -->
                  <div class="pt-4 flex flex-wrap px-2 block">
                    <!-- 1 -->
                    <div v-for="(c,i) in p.caracteristicas" :key="i" class="w-full">
                      <div class="w-full pb-3">
                        <span v-if="c.tieneCaracteristica">
                          <img class="icon-check" src="img/check_circle_black.svg" alt="Check image">
                        </span>
                        <!-- <span v-else> <img class="icon-check" src="img/check.svg" alt="Check image"> </span> -->
                        <span class="text-dark text-sm">{{ c.caracteristica.nombre }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Condiciones -->
                  <div class="py-4 text-sm text-dark px-2">
                    <div class="pb-2">Condiciones:</div>
                    <div class>Contrato a 1 mes.</div>
                    <div class>Cancelación con aviso previo a 30 días antes de la fecha de cobro.</div>
                  </div>

                  <!-- Button -->
                  <div class="px-2">
                    <button :class="[(r%2 == 0) ? 'btn-par' : 'btn-yellow-degree btn-impar']" class="btn mt-2 py-4 block rounded text-sm w-full" @click="selectPlan(p)">Seleccionar</button>
                  </div>
                </div>
              </div>
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
  
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      errorVisible: false,
      scrolled: false,
      currentPlan: null,
      lasIndexClicked: 0,
      swiperOption: {
          // some swiper options/callbacks
          initialSlide: 0,
          slidesPerView: 1,
          spaceBetween: 30,
          on: {
            slideChange() {
              this.currentPlan = this.activeIndex;
              
            }
          }
        }
    };
  },
  computed: {
    swiper() {
        return this.$refs.swiper.swiper
    },
    ...mapState(["plan"]),
    planesFiltrados() {
      // El plan Preventa Inauguración no se muestra
      return this.planes.filter(p => p.nombre !== "Preventa Inauguración");
      // return this.planes;
    },
    planPreventa() {
      return this.planes.find(p => p.nombre === "Preventa Inauguración");
    }
  },
  props: {
    planes: {
      type: Array,
      required: true,
      default: []
    },
    caracteristicasPlanes: {
      required: true,
      default: []
    }
  },
  methods: {
    ...mapActions(["set_plan"]),
    changeSlide(event) {
      console.log(event);
    },
    planClicked(index) {
      console.log(index);
    },
    selectPlan(p) {
      this.set_plan(p);
      this.continuar();
      // if(p.nombre == 'Mensual Flexible') {
      //   this.set_plan(this.planPreventa);
      // } else {
      //   this.set_plan(p);
      // }
    },
    continuar() {
      if (this.plan) {
        this.errorVisible = false;
        this.$emit("paso", 2);
      } else {
        this.errorVisible = true;
      }
    }
    // volver() {
    //   this.$emit('paso',1);
    // }
  }
};
</script>
<style lang="scss" scoped>
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
//   margin-top: 70px;
// }

.icon-check {
  max-width: 17px;
  vertical-align: middle;
  @media (max-width: 500px) {
    max-width: 10px;
  }
}

.plan.active {
  //  img {
  // 	  transform: translatey(0px);
  // 	  animation: float 1.5s ease-in-out infinite;
  //  }
}

.plan-tachado {
  position: relative;
  &::before {
    content: "";
    width: 40%;
    @media (max-width: 500px) {
      width: 80%;
    }
    height: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #5b5ba8;
  }
}

.plan-recuadro {
  transition: all 0.2s ease-in-out;
}

.precio-plan {
  padding: 5px 8px;
  border: 3px solid #e8b800;
}

.btn-par {
  position: relative;
  text-align: center;
  // padding: 1rem 1.25rem;
  color: #252525;
  border: 1px solid #969696;
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 5%;
    width: 20%;
    height: 2px;
    background-color: #272727;
  }
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    right: 5%;
    width: 20%;
    height: 2px;
    background-color: #272727;
  }
}

.btn-impar {
}
</style>

