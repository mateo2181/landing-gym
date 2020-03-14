<template>
  <div class="flex w-full flex-wrap content-start">
    <div class="flex w-full">
      <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div class="py-2 title text-white text-3xl">Elige tu plan</div>
          <div class="line-grey relative"></div>
      </div>
      
    </div>
    <!-- 1 -->
    <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-2 sm:mb-8">
      <div class="h-full relative mr-1">
        
        <div class="flex flex-wrap items-end">
          <div class="mt-4 w-full">
          <div class="text-white text-sm font-light">
            <div> Pases con acceso 24/7. </div>
            <div> Disfruta de todas las actividades. </div>
            <div> Entrenamientos Smart QR. </div>
            <div> Entrenadores en salas de musculación. </div>
            <div> Atención personalizada. </div>
          </div>
      </div>
          <div class="w-full py-4 planes-types">
            
            <div :class="[activeType == 'Mensual' ? 'first': 'second']" class="flex relative options">
              <div class="plan-item" :class="{'active': activeType == 'Mensual'}" @click="activeType = 'Mensual'"> Mensual </div>
              <div class="plan-item" :class="{'active': activeType == 'Pases diarios'}" @click="activeType = 'Pases diarios'"> Pases diarios </div>
            </div>

            <!--  -->
            <div class="w-full mt-4">
              <div>
                <div class="w-full text-white text-sm font-semibold">
                  Elige una membresía y disfruta todos estos beneficios y más.
                </div>
                <div v-if="activeType == 'Mensual'" class="w-full">
                  <div class="flex icons-menu justify-center mt-4 mb-4">
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 46px;" src="img/planes/icons/24-7-y.png" alt="247"> 
                      <div class="icons-menu-title"> Abierto 24/7 </div>
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img src="img/planes/icons/wifi.png" alt="Wifi"> 
                      <div class="icons-menu-title"> Wifi Gratis </div>
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 35px;" src="img/planes/icons/hombre.png" alt="Hombre">
                      <div class="icons-menu-title"> Entrenadores en Sala </div> 
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 40px;" src="img/planes/icons/moto-y.png" alt="Moto"> 
                      <div class="icons-menu-title"> Aparcamiento Motos </div>
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img src="img/planes/icons/burn.png" alt="Burn"> 
                      <div class="icons-menu-title"> HIT Studio </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="activeType == 'Pases diarios'" class="w-full">
                    <div class="flex icons-menu justify-center mt-4 mb-4">
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 46px;" src="img/planes/icons/24h-y.png" alt="247"> 
                      <div class="icons-menu-title"> Abierto 24/7 </div>
                    </div>
                    <div class="w-1/5 px-1 self-center text-center">
                      <img style="max-width: 33px;" src="img/planes/icons/nocontrato.png" alt="Wifi"> 
                      <div class="icons-menu-title"> Sin contrato </div>
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 35px;" src="img/planes/icons/film.png" alt="Hombre">
                      <div class="icons-menu-title"> Clases virtuales </div> 
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img style="max-width: 40px;" src="img/planes/icons/locker-y.png" alt="Moto"> 
                      <div class="icons-menu-title"> Taquillas gratuitas </div>
                    </div>
                    <div class="w-1/5 px-2 self-center text-center">
                      <img src="img/planes/icons/zumba-y.png" alt="Zumba"> 
                      <div class="icons-menu-title"> Actividades gratuitas </div>
                    </div>
                  </div>

                </div>
                <div class="hidden md:block w-full text-xs text-gray-400 mt-4">
                  <div> * La tarjeta de acceso se debe recoger en el centro la primera vez en horario de atención al cliente. </div>
                  <!-- <div>Todos los planes tienen disponible acceso 24/7.</div> -->
                  <!-- <div>La matricula es gratuita en todos los planes. </div> -->
                  <!-- <div>Cancela tu membresia cuando quieras.*</div> -->
                  <!-- <div>Invita hasta 3 usuarios cada mes.**</div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="pb-1 mt-4 hidden md:flex">
            <img class="pr-1" style="max-width: 5rem;" src="/img/stripe.png" alt="Stripe - Pago Seguro" />
            <img class="pr-1" style="max-width: 2.5rem;" src="/img/mastercard.svg" alt="Mastercard" />
            <img style="max-width: 2.5rem;" src="/img/visa.svg" alt="Visa" />
          </div>
        </div>
      </div>
    </div>
    <!-- PLANES -->
    <div class="flex content-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-2 sm:mb-4">
      <div class="flex content-center">
        <div v-if="activeType == 'Mensual'" class="w-full flex flex-wrap px-2 md:px-12 lg:px-12 xl:pl-32">
          <!-- <div class="w-3/5 flex"> -->
          <!-- Plan Anual -->
          <div v-if="planAnual" class="plan w-2/5 md:w-1/3 px-2 cursor-pointer text-center planAnual relative"
               :class="[{'active': (plan && planAnual.id == plan.id)},{'inactive': (plan && planAnual.id != plan.id)}]"
                @click="selectPlan(planAnual)">
            <div class="text-xl md:text-3xl bold uppercase text-blue-800">
              {{ planAnual.nombre }}
            </div>

            <div class="flex flex-wrap icons justify-center mt-3">
              <img src="img/planes/icons/24h.png" alt="24 Horas">
              <img src="img/planes/icons/zumba.png" alt="Zumba">
              <img src="img/planes/icons/tablet.png" alt="Tablet">
              <img src="img/planes/icons/ducha.png" alt="Ducha">
              <img src="img/planes/icons/film.png" alt="Film">
              <img src="img/planes/icons/locker.png" alt="Locker">

            </div>

            <div class="mt-2 text-2xl bold uppercase text-blue-800 precioMes">
              29 &euro;
            </div>

            <div class="plan-tachado mt-2 text-2xl bold uppercase text-white">
              33,90 &euro;
            </div>
            <div class="mt-1 bold text-sm uppercase text-white">
              POR MES
            </div>

            <div class="mt-2 bold text-sm uppercase text-blue">
              PAGO ANUAL
            </div>
            <div class="text-2xl bold uppercase text-blue">
              {{ planAnual.pagoMensual }} &euro;
            </div>

            <div class="w-full mt-3">
              <img class="comprobado mx-auto" 
                   src="img/planes/comprobado-negro.png" 
                   alt="Plan seleccionado">
            </div>

            <img class="ahorra25" src="img/planes/ahorra25.png" alt="Ahorra 25">

          </div>
          <!-- Plan Mensual -->
          <div v-if="planMensual" class="plan w-3/5 md:w-2/3 px-2 cursor-pointer text-center planMensual"
               :class="[{'active': (plan && planMensual.id == plan.id)},{'inactive': (plan && planMensual.id != plan.id)}]"
                @click="selectPlan(planMensual)">
            <div class="text-xl md:text-3xl bold uppercase text-blue">
              {{ planMensual.nombre }}
            </div>

            <div class="text-sm bold mt-3 text-white">
              Ahora más beneficios por menos dinero
            </div>

            <div class="flex flex-wrap icons justify-center mt-3">
              <img src="img/planes/icons/24h.png" alt="24 Horas">
              <img src="img/planes/icons/zumba.png" alt="Zumba">
              <img src="img/planes/icons/tablet.png" alt="Tablet">
              <img src="img/planes/icons/ducha.png" alt="Ducha">
              <img src="img/planes/icons/film.png" alt="Film">
              <img src="img/planes/icons/locker.png" alt="Locker">

            </div>

            <div class="mt-12 text-2xl bold uppercase text-white">
              {{ planMensual.pagoMensual }} &euro;
            </div>

            <div class="plan-tachado-mensual mt-2 text-2xl bold uppercase text-blue">
              42,90 &euro;
            </div>
            <div class="mt-1 bold text-sm uppercase text-white">
              POR MES
            </div>

            <div class="w-full mt-3">
              <img class="comprobado mx-auto" 
                   src="img/planes/comprobado-blanco.png" 
                   alt="Plan seleccionado">
            </div>

          </div>


            <div class="w-full flex justify-end mt-12 md:mt-0">
              <div class="w-3/4 sm:w-1/3 lg:w-1/4">
                <button :class="{'visible': plan}" class="btn-continuar btn mt-2 py-4 block rounded text-sm w-full" @click="continuar">CONTINUAR</button>
              </div>
            </div>

        </div>

        <!-- PLANES PRUEBAS -->
        <div v-else-if="activeType == 'Pases diarios'" class="w-full flex content-start flex-wrap px-2 md:px-12 lg:px-12 xl:pl-32">
            
            <div class="plan w-full cursor-pointer planPrueba relative"
               v-for="(p,j) in planesPruebas" :key="j"
               :class="{'active': (plan && p.id == plan.id)}"
                @click="selectPlan(p)">
                  <div class="flex justify-between">
                    <div class="w-full sm:w-3/5 flex">
                      <div class="pr-2 pt-3">
                        <div v-if="!plan || p.id != plan.id" class="checkbox-white"></div>    
                        <div v-if="plan && p.id == plan.id" class="checkbox-blue">
                          <img src="img/planes/comprobado-negro.png" alt="Plan seleccionado">
                        </div>
                      </div>
                      <div class="w-auto content-texto">
                          <div class="text-blue bold uppercase text-xl md:text-2xl"> PRUEBALO! - {{ p.titulo }} </div>
                          <div :class="{'font-semibold': (plan && p.id == plan.id)}" class="my-2 sm:my-0 text-blue text-sm"> {{ p.texto }} </div>
                          <div class="my-2 sm:my-0 flex bold uppercase items-end"> 
                            <span class="text-lg md:text-lg text-blue"> POR SÓLO </span> 
                            <span :class="[(plan && p.id == plan.id) ? 'text-white text-2xl' : 'text-bluelight text-lg']" class="inline-flex sm:hidden pl-2">  {{ p.pagoMensual }} &euro; </span>
                          </div>
                          <!-- <div v-if="plan && p.id == plan.id" class="py-2 px-4 border-yellow-dark border-2 mb-2 text-xl bold text-blue inline-flex sm:hidden"> {{ p.pagoMensual }} &euro; </div> -->
                          <div v-if="plan && p.id == plan.id" class="w-auto mt-3">
                            <label class="text-gray-700 text-sm font-semibold" for=""> Fecha de comienzo </label>
                            <div class="wrapper-input">
                              <date-pick @focus.native="event.preventDefault()" class="bg-transparent" :mobileBreakpointWidth="4500" :inputAttributes="{readonly: true}" readonly :weekdays="weekdays" :months="months" v-model="fechaComienzoAux" :format="'DD/MM/YYYY'"></date-pick>
                              <!-- <input type="date" placeholder="Seleccione una Fecha de Comienzo" name="fechaComienzo" v-validate="'required|date_format:dd/MM/yyyy'" v-model="fechaComienzo"> -->
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="hidden sm:flex w-auto pr-4 md:pr-8">
                      <div class="precio">
                         {{ p.pagoMensual }} &euro;
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Continuar BUTTON -->
                <div class="w-full flex justify-end">
                  <div class="w-3/4 sm:w-1/3 lg:w-1/4">
                    <button :class="{'visible': plan}" class="btn-continuar btn mt-2 py-4 block rounded text-sm w-full" @click="continuar">CONTINUAR</button>
                  </div>
                </div>
        </div>

      </div>
    </div>
    <div class="flex pb-1 mx-2 md:hidden">
      <!-- <img class="w-full" src="/img/stripe.png" alt="Stripe - Pago Seguro" /> -->
      <img class="pr-1 h-auto" style="max-width: 5rem;" src="/img/stripe.png" alt="Stripe - Pago Seguro" />
      <img class="pr-1" style="max-width: 2.5rem;" src="/img/mastercard.svg" alt="Mastercard" />
      <img style="max-width: 2.5rem;" src="/img/visa.svg" alt="Visa" />
    </div>
    <div class="block md:hidden w-full text-xs text-gray-400 my-8">
        <div> * La tarjeta de acceso se debe recoger en el centro la primera vez en horario de atención al cliente. </div>
        <!-- <div>Todos los planes tienen disponible acceso 24/7.</div> -->
        <!-- <div>La matricula es gratuita en todos los planes. </div> -->
        <!-- <div>Cancela tu membresia cuando quieras.*</div> -->
        <!-- <div>Invita hasta 3 usuarios cada mes.**</div> -->
      </div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      errorVisible: false,
      scrolled: false,
      activeType: 'Mensual',
      currentPlan: null,
      fechaComienzoAux: null,
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
  watch: {
    activeType: function(val,newVal) {
      this.set_plan(null);
    }
  },
  components: {
    DatePick
  },
  computed: {
    swiper() {
      return this.$refs.swiper.swiper;
    },
    ...mapState(["plan","fechaComienzo"]),
    planesFiltrados() {
      // El plan Preventa Inauguración no se muestra
      return this.planes.filter(p => p.nombre == "Mensual Flexible" || p.nombre == "Anual");
      // return this.planes;
    },
    planAnual() {
      if(this.planes.length == 0) return null;
      return this.planes.find(p => p.nombre == "Anual");
    },
    planMensual() {
      if(this.planes.length == 0) return null;
      return this.planes.find(p => p.nombre == "Mensual Amiga");
    },
    planPreventa() {
      return this.planes.find(p => p.nombre === "Preventa Inauguración");
    },
    weekdays() {
      return ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']
    },
    months() {
      return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    }   

  },
  created() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    this.fechaComienzoAux = `${dd}/${mm}/${yyyy}`;
    this.set_fechacomienzo(`${dd}/${mm}/${yyyy}`);
    this.set_plan(null);
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
    },
    planesPruebas: {
      required: true,
      default: []
    }
  },
  methods: {
    ...mapActions(["set_plan",'set_fechacomienzo']),
    changeSlide(event) {
      console.log(event);
    },
    planClicked(index) {
      console.log(index);
    },
    setFechaComienzo(event) {
      console.log(event.target.value);
    },
    selectPlan(p) {
      this.set_plan(p);
      // if(p.nombre == 'Mensual Flexible') {
      //   this.set_plan(this.planPreventa);
      // } else {
      //   this.set_plan(p);
      // }
    },
    continuar() {
      if (this.plan && this.fechaComienzoAux != null && this.fechaComienzoAux != '') {
        this.set_fechacomienzo(this.fechaComienzoAux);
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

.ahorra25 {
  position: absolute;
  bottom: -47px;
  @media(max-width: 550px) {
    left: 70%;
    transform: scale(1.5);
  }
}

.planAnual {
  background-color: var(--color-bluelight);
  transform: translateX(10px);
  padding: 1rem 1rem 1.2rem 1rem;
  position: relative;
  border-radius: 1.1rem;
  transition: all .5s ease-out;
  @media(max-width: 550px) {
    padding: .5rem .5rem 4rem .5rem;
  }
  .icons {
    img {
      max-width: 35px;
      height: 32px;
      margin: 6px 5px;
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(695%) hue-rotate(197deg) brightness(115%) contrast(100%);
    }
  }
  .comprobado {
      max-width: 3rem;
      visibility: hidden;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);  
    }
  &.active {
    z-index: 10;
    .comprobado {
      visibility: visible;
      
    }
  }
  &.inactive {
    background-color: #fff;
    * {
      color:#aaabaa !important;
    }
    .plan-tachado {
      &::before {
        background: #aaabaa !important;
      }
    }
    .precioMes {
      color: var(--color-bluelight) !important;
    }
    .icons {
      img {
        filter: brightness(0) saturate(100%) invert(81%) sepia(6%) saturate(78%) hue-rotate(71deg) brightness(87%) contrast(82%);
      }
    }
  }
}

.planMensual {
  background-color: var(--color-yellow);
  padding: 1rem 1rem 4rem 1rem;
  position: relative;
  border-radius: 1.1rem;
  transition: all .5s ease-out;
  @media(max-width: 550px) {
    padding: .5rem .5rem 4rem .5rem;
  }
  .icons {
    img {
      max-width: 35px;
      height: 32px;
      margin: 6px 5px;
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(695%) hue-rotate(197deg) brightness(115%) contrast(100%);
    }
  }
  .comprobado {
      max-width: 3rem;
      visibility: hidden;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  &.active {
    .comprobado {
      visibility: visible;
      
    }
  }
  &.inactive {
    background-color: #fff;
    * {
      color:#aaabaa !important;
    }
    .plan-tachado-mensual {
      &::before {
        background: #aaabaa !important;
      }
    }
    .icons {
      img {
        filter: brightness(0) saturate(100%) invert(81%) sepia(6%) saturate(78%) hue-rotate(71deg) brightness(87%) contrast(82%);
      }
    }
  }
}


.planPrueba {
  background-color: #e0e0e0;
  margin-bottom: 15px;
  border-radius: .5rem;
  overflow: hidden;
  transition: all .4s ease-out;
  padding: 0 .5rem;
  .content-texto {
    padding: .65rem 0;
  }
  .checkbox-white {
    background-color: white;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .checkbox-blue {
    height: 30px;
    width: 30px;
    img {
      width: 100%;
    }
  }
  .precio {
    background: white;
    clip-path: ellipse(50% 64% at 50% 50%);
    height: 100%;
    text-align: center;
    line-height: 3.4;
    width: 7rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--color-bluelight);
    transition: all .2s ease-out;
  }
  &.active {
    // padding: .5rem .5rem;
    @media(max-width: 575px) {
      background-color: var(--color-yellow);
    }
    background-color: white;
    .content-texto {
      // padding-top: .75rem;
      // padding-bottom: 1.9rem;
    }
    .precio {
      clip-path: ellipse(50% 31% at 50% 50%);
      background: var(--color-yellow);
      color: white;
      line-height: 7;
    }
  }
}


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
    width: 80%;
    height: 2px;
    position: absolute;
    top: 60%;
    left: 50%;
    // transform: translate(-50%, -50%);
    transform: translateX(-50%);
    background: white;
  }
}

.plan-tachado-mensual {
  position: relative;
  &::before {
    content: "";
    width: 40%;
    height: 2px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    background: #26354a;
  }
}

.plan-recuadro {
  transition: all 0.2s ease-in-out;
}

.btn-continuar {
  color: white;
  background-color: var(--color-yellow);
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
}

.planes-types {
  margin-top: 20px;
  .plan-item {
      text-align: center;
      width: 50%;
      font-size: 20px;
      color: white;
      cursor: pointer;
      padding: 10px 2px;
      // border-bottom: 2px solid rgba(202, 202, 202, 0.59);
      transition: all .2s ease-out;
      font-weight: bold;
      position: relative;
      &:after {
          content: "";
          transition: all .2s ease-out;
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          bottom: 0;
          background-color: rgba(202, 202, 202, 0.59);
          // border-bottom: 4px solid rgba(202, 202, 202, 0.59);  
      }
      &:hover {
        &:after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          bottom: 0;
          background-color: rgba(202, 202, 202, 0.59);
          // border-bottom: 4px solid rgba(202, 202, 202, 0.59);  
        }
      }
      &.active {
        color: var(--color-bluelight);
        // border-bottom: 4px solid var(--color-bluelight);
        font-weight: bold; 
      }
  }
  .options:after {
      content: "";
      position: absolute;
      left: 0;
      width: 50%;
      height: 4px;
      bottom: 0;
      background-color: var(--color-bluelight);
      transition: all .5s ease-out;
  }
  .options.first:after {
    left: 0;
    transform: translateX(0%);
  }
  .options.second:after {
    left: 0;
    transform: translateX(100%);
  }
  .icons-menu {
    text-align: cemter;
    .icons-menu-title {
      color: var(--color-yellow);
      font-size: 0.6rem;
      text-align: center;
      margin-top: 3px;
    }
    img {
      // max-width: 2rem;
      // height: 2rem;
      margin: 0px auto;
      // filter: brightness(0) saturate(100%) invert(79%) sepia(77%) saturate(1306%) hue-rotate(331deg) brightness(101%) contrast(94%);
    }
  }
}

.wrapper-input {
  border-color: var(--color-bluelight);
}

</style>

