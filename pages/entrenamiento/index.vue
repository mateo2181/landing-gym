<template>
  <div>
    <!-- <btn-inscribiteahora class="hidden md:block"></btn-inscribiteahora> -->
    <div class="bg-custom-black-fivo"></div>
    <div class="absolute bg-blue-darkest w-100 inset-x-0">
      <transition-group
        :enter-active-class="seccionActive != 0 ? 'animated fadeInRight' : 'animated fadeInLeft'"
        :leave-active-class="seccionActive != 0 ? 'animated fadeOutLeft' : 'animated fadeOutRight'"
        :duration="{ enter: 1000, leave: 400 }"
      >
        <!-- Primera pantalla -->
        <div
          :key="1"
          v-show="seccionActive == 0"
          class="contenido mx-4 sm:mx-20 md:mx-24 lg:ml-32 lg:mr-24 flex flex-wrap items-start md:items-center content-center md:content-around"
        >
          <div class="flex w-full flex-wrap">
            <!-- 1 -->
            <div ref="firstblock" class="w-full flex items-center md:w-2/5 mt-6">
              <div class="relative w-full mx-2">
                <div class="line-grey"></div>
                <div class="my-4 title text-white text-3xl">Entrenamiento</div>
                <div class="my-5 subtitle text-white text-xs">
                  Cada uno de los entrenamientos que te ofrece FIVO han sido diseñados por los
                  mejores expertos del fitness. Diferentes niveles de intensidad te permitirán
                  evolucionar de manera progresiva y segura y lo que es mejor: con resultados
                  garantizados.
                  <br>
                  Sumérgete en la nueva experiencia de entrenar en FIVO.
                </div>
                <div class="mt-4 title text-white text-2xl">Entrenamiento por objetivo</div>
                <div class="my-2 subtitle text-white text-xs">
                  Cada uno de los entrenamientos que te ofrece FIVO han sido diseñados por los
                  mejores expertos del fitness. Diferentes niveles de intensidad te permitirán
                  evolucionar de manera progresiva y segura y lo que es mejor: con resultados
                  garantizados.
                </div>

                <div class="my-6 flex flex-wrap w-full">
                  <div class="w-1/2 pr-1">
                    <button
                      @click="objetivosVisible = true"
                      class="btn btn-border-white w-full py-4 rounded text-sm"
                    >Entrenamieto por objetivos</button>
                  </div>
                  <div class="w-1/2">
                    <button
                      @click="seccionActive = 1"
                      class="btn btn-border-white w-full py-4 rounded text-sm"
                    >Horario de Clases</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div class="w-full flex items-center pr-2 xl:pr-6 md:w-3/5 mt-10 mb-4 md:mt-2">
              <div class="relative w-full mx-auto">
                <div id="ejercicios" class="ejercicios" :style="heightEjercicios">
                  <div @click.prevent="scrollUp" :class="{'active': transitionY > 0 }" class="scrollUp">
                    <img src="img/up-chevron.svg" alt>
                  </div>
                  <div @click.prevent="scrollDown" :class="{'active': transitionY < 61 }" class="scrollDown">
                    <img src="img/down-chevron.svg" alt>
                  </div>
                  <!-- <div class="vertical-line"></div> -->
                  <!-- Ejercicio 1 -->
                  <div :style="transitionEjercicios" class="box-actividades">
                    <div class="flex items-center ejercicio-1">
                      <div class="w-1/2 text-center border-r">
                        <img class="w-3/5 xl:w-1/2 img-ejercicio" src="img/ejercicios/ejercicio-11.svg" alt>
                      </div>
                      <div class="w-1/2">
                        <div class="flex w-line items-center">
                          <div class="line w-3/5"></div>
                          <div class="tiempo pl-2 w-2/5">5 minutos</div>
                        </div>
                      </div>
                    </div>
                    <!-- Descanso 1 -->
                    <div class="flex descanso-1">
                      <div class="w-1/2 border-r">
                        <!-- <div class="line"></div> -->
                      </div>
                      <div class="numero">30</div>
                      <div class="tiempo">Descanso</div>
                    </div>
                    <!-- Ejercicio 2 -->
                    <div class="flex items-center ejercicio-1">
                      <div class="w-1/2">
                        <div class="flex w-line h-full items-center">
                          <div class="tiempo pr-2 w-2/5">12 repeticiones</div>
                          <div class="line-2 w-3/5"></div>
                        </div>
                      </div>
                      <div class="w-1/2 text-center relative">
                        <div class="line-ejercicio"></div>
                        <img class="w-3/5 xl:w-1/2 img-ejercicio" src="img/ejercicios/ejercicio-22.svg" alt>
                      </div>
                    </div>
                    <!-- Descanso 2 -->
                    <div class="flex descanso-1">
                      <div class="w-1/2 border-r">
                        <!-- <div class="line"></div> -->
                      </div>
                      <div class="numero">20</div>
                      <div class="tiempo">Descanso</div>
                    </div>
                    <!-- Ejercicio 3 -->
                    <div class="flex items-center ejercicio-1">
                      <div class="w-1/2 text-center border-r">
                        <img class="w-3/5 xl:w-1/2 img-ejercicio" src="img/ejercicios/ejercicio-33.svg" alt>
                      </div>
                      <div class="w-1/2">
                        <div class="flex w-line items-center">
                          <div class="line w-3/5"></div>
                          <div class="tiempo pl-2 w-2/5">12 repeticiones</div>
                        </div>
                      </div>
                    </div>
                    <!-- Descanso 3 -->
                    <div class="flex descanso-1">
                      <div class="w-1/2 border-r">
                        <!-- <div class="line"></div> -->
                      </div>
                      <div class="numero">15</div>
                      <div class="tiempo">Descanso</div>
                    </div>
                    <!-- Ejercicio 4 -->
                    <div class="flex items-center ejercicio-1">
                      <div class="w-1/2">
                        <div class="flex w-line items-center">
                          <div class="tiempo pr-2 w-2/5">12 repeticiones</div>
                          <div class="line-2 w-3/5"></div>
                        </div>
                      </div>
                      <div class="w-1/2 relative text-center">
                        <div class="line-ejercicio"></div>
                        <img class="w-3/5 xl:w-1/2 img-ejercicio" src="img/ejercicios/ejercicio-44.svg" alt>
                      </div>
                    </div>
                    <!-- Extra line -->
                    <div class="flex descanso-1">
                      <div style="min-height: 70px;" class="w-1/2 border-r">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- HORARIOS -->
        <div
          :key="2"
          v-show="seccionActive == 1"
          class="mx-8 sm:mx-20 md:mx-24 lg:ml-32 lg:mr-24 contenido flex flex-wrap items-start md:items-center content-center md:content-around"
        >
          <horarios @seccion="seccionActive = 0"></horarios>
        </div>
      </transition-group>
    </div>
    <!-- Entrenamiento por objetivos -->
    <transition :enter-active-class="'animated fadeInUp'" :leave-active-class="'animated fadeOutDown'">
        <entrenamiento-por-objetivos @close="objetivosVisible = false" v-if="objetivosVisible"></entrenamiento-por-objetivos>
    </transition>
  </div>
</template>

<script>
import EntrenamientoPorObjetivos from '~/components/entrenamiento/entrenamiento-por-objetivos.vue';
import Horarios from '~/components/entrenamiento/horarios.vue';
export default {
  data() {
    return {
      transitionY: 0,
      seccionActive: 0,
      objetivosVisible: false,
      entrenamientosporobjetivos: `FIVO ha sido diseñado para optimizar tu tiempo y duplicar tus resultados. 
                                   Hay un entrenamiento creado para ti sea cual sea tu objetivo: 
                                   aumentar masa muscular, perder peso, mejorar la capacidad aeróbica o 
                                   estar en forma. Derriba tus barreras. Estás decidido? Empieza!`,
      objetivoActual: 0,
      h: 0
    };
  },
  mounted() {
    // this.heightF = this.$refs.firstblock.clientHeight;
    // console.log(this.$refs.firstblock.clientHeight);
    this.getHeight();
  },
  components: {
      EntrenamientoPorObjetivos,
      Horarios
  },
  watch: {
    objetivosVisible: function(old, newVal) {
      this.getHeight();
    }
  },
  created() {
    if(process.client) {
        if (localStorage.getItem("horarios") != null) {
            this.seccionActive = 1;
            localStorage.removeItem("horarios");
        }
    }
  },
  computed: {
    heightEjercicios() {
      return { height: `${this.h}px` };
    },
    transitionEjercicios() {
      return { transform: `translateY(-${this.transitionY}px)` };
    },
    isBottom() {
      return this.transitionY == 61; 
    }
  },
  methods: {
    getHeight() {
      let heightF = this.$refs.firstblock.clientHeight;
      this.h = 50;
      if(process.client) {
        this.h = window.innerHeight - heightF / 1.6 - 65;
      }
    },
    scrollUp() {
      var ejercicios = this.$el.querySelector(".box-actividades");
      // console.log(ejercicios.clientHeight);
      // if(this.transitionY > 0) this.transitionY -= this.transitionY-20 > 0 ? 20 : this.transitionY;
      this.transitionY = 0;
      
      // if(ejercicios.scrollTop != 0)
      // ejercicios.scrollTop -= 40;
      // else if(this.transitionY > 0) this.transitionY =  
      // if (ejercicios.scrollTop > ejercicios.clientHeight
      // else this.isBottom = false;
    },
    scrollDown() {
      // this.$refs.firstblock.scrollTop = 100;
      var ejercicios = this.$el.querySelector(".box-actividades");
      // console.log(ejercicios.clientHeight);
      // setInterval(function() {},2000);
      // if(this.transitionY < 61) this.transitionY += this.transitionY+20 <= 61 ? 20 : 1;
      this.transitionY = ejercicios.clientHeight - this.h;
      
      // if(ejercicios.scrollTop != ejercicios.scrollHeight)
      // ejercicios.scrollTop += 40;
      // ejercicios.style('transform', 'translateY(-20%)');
      // if (ejercicios.scrollTop > ejercicios.clientHeight) this.isBottom = true;
      // else this.isBottom = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.scrollDown {
  position: absolute;
  bottom: -30px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px 7px;
  left: 50%;
  transform: translateX(-50%);
  // @media (max-width: 800px) {
  //   bottom: -28px;
  // }
  img {
    vertical-align: middle;
    max-width: 15px;
  }
  &.active {
    border: none;
    background: var(--color-bluelight);
    img {
      filter: invert(1);
    }
  }
}

.scrollUp {
  position: absolute;
  top: -31px;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px 7px;
  left: 50%;
  transform: translateX(-50%);
  img {
    vertical-align: middle;
    max-width: 15px;
  }
  &.active {
    border: none;
    background: var(--color-bluelight);
    img {
      filter: invert(1);
    }
  }
}

.btn-border-white {
  min-width: auto;
  height: 60px;
}

.ejercicios {
  .box-actividades {
    transition: all 3.5s cubic-bezier(0.54, 0.35, 0.35, 0.99);
  }
  height: calc(100vh - 190px);
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.5s ease-out;
  .vertical-line {
    width: 0.5px;
    position: absolute;
    height: 100%;
    background-color: #ffffff;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 800px) {
    height: 280px;
  }
  .ejercicio-1 {
    // width: 95%;
    position: relative;
    .line-ejercicio {
      position: absolute;
      height: 100%;
      width: 1px;
      background: white;
      left: -1px;
    }
    .img-ejercicio {
      // max-width: 150px;
    }
    .w-line {
      > .line {
        // width: 70%;
        height: 1px;
        position: relative;
        background-color: #8e8e8e;
        &::before {
          content: "";
          position: absolute;
          left: -4px;
          border-radius: 50%;
          top: -3px;
          width: 7px;
          height: 7px;
          background: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          border-radius: 50%;
          top: -2px;
          width: 5px;
          height: 5px;
          background: #fff;
        }
      }
      .line-2 {
        // width: 70%;
        height: 1px;
        position: relative;
        background-color: #8e8e8e;
        &::before {
          content: "";
          position: absolute;
          right: -4px;
          border-radius: 50%;
          top: -3px;
          width: 7px;
          height: 7px;
          background: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          left: -4px;
          border-radius: 50%;
          top: -2px;
          width: 5px;
          height: 5px;
          background: #fff;
        }
      }
    }

    .tiempo {
      // width: 27%;
      color: white;
      font-size: 0.8rem;
      // position: absolute;
      // right: -5px;
      // top: 62%;
    }
  }

  .descanso-1 {
    position: relative;
    height: 60px;
    // position: absolute;
    // left: 17%;
    // top: 95%;
    .line {
      // position: absolute;
      // left: 18%;
      // top: -3%;
      height: 100px;
      width: 1px;
      background-color: #8e8e8e;
      // &::after {
      //   content: "";
      //   position: absolute;
      //   right: -1px;
      //   top: 50%;
      //   width: 3px;
      //   height: 3px;
      //   background: #fff;
      // }
    }
    .tiempo {
      position: absolute;
      color: rgb(180, 180, 180);
      font-size: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      left: 54%;
      width: 50%;
      @media (max-width: 600px) {
        left: 58%;
      }
    }
    .numero {
      position: absolute;
      top: 50%;
      background-color: white;
      border-radius: 50%;
      padding: 1px 5px;
      transform: translate(-50%, -50%);
      left: 50%;
    }
  }
}

.subtitle {
  line-height: 1.4;
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

// Entrenamiento por Objetivos
.objetivos {
  .line-grey-objetivo {
    width: 100%;
    height: 1px;
    background-color: #8e8e8e;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 3px;
      height: 3px;
      background: #fff;
    }
  }

  .img-fivo {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    max-width: 80%;
    @media (max-width: 800px) {
      display: none;
    }
  }

  .img-central {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    @media (max-width: 800px) {
      display: none;
    }
  }

  .btn-entrenamiento {
    z-index: 20;
    position: absolute;
    bottom: 10%;
    left: 5%;
    // transform: translateX(-50%);
    width: auto;
    @media (max-width: 800px) {
      right: 10%;
      left: auto;
      top: -20px;
      position: relative;
    }
  }

  .img-chevron {
    max-width: 30px;
    border: 1px solid #fafafa;
    padding: 5px;
    cursor: pointer;
    @media (max-width: 800px) {
      max-width: 20px;
    }
  }
}
</style>

