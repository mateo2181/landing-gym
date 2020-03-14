<template>
  <div class="flex w-full flex-wrap md:content-center md:items-center">
    <!-- 1 -->
    <div class="w-full md:w-2/5 mb-0 md:mb-4 pr-0 md:pr-16">
      <div class="flex w-100 flex-wrap justify-between items-center relative">
        <div class="my-4 title text-white text-3xl">Horarios</div>
        <div>
          <button
            v-if="urlpath == 'entrenamiento'"
            @click="$emit('seccion',true)"
            class="text-yellow text-sm"
          >Entrenamiento</button>
          <button
            v-if="urlpath == 'burn'"
            @click="$emit('seccion',true)"
            class="text-yellow text-sm"
          >Burn</button>
        </div>
        <div class="block relative line-grey"></div>
      </div>
      <div class="my-4 w-full text-left text-white text-xs leading-normal">
        Tu tiempo es lo mas valioso que tienes y debes aprovecharlo conciliando
        el trabajo, la familia y el ocio. Nuestro concepto Siempre Abierto te facilita que te
        ejercites cuando quieras. Por la mañana, por la tarde, por la noche o durante la madrugada.
        Un gimnasio abierto 24 horas al dia durante todo el año, los meses que tu quiera, para que
        nadie marque tu horario.
      </div>
      <div class="mt-8 w-full hidden md:flex">
        <!-- Objetivos -->
        <div class="text-white w-1/2 px-2">
          <div class="pb-2 text-base">OBJETIVO</div>
          <div class="pb-2 block text-xs" v-for="(o,i) in objetivos" :key="i">
            <!-- <div @click="objetivoSeleccionado = o.name" class=""> 
                  <input :checked="objetivoSeleccionado == o.name" type="checkbox" name="" id="">  
                  {{ o.name }} 
            </div>-->
            <div class="pretty p-svg p-curve">
              <input
                @click="objetivoSeleccionado == o.name ? objetivoSeleccionado = null : objetivoSeleccionado = o.name"
                :checked="objetivoSeleccionado == o.name"
                type="checkbox"
              />
              <div class="state p-info">
                <!-- svg path -->
                <svg class="svg svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                    style="stroke: white;fill:white;"
                  />
                </svg>
                <label @click="objetivoSeleccionado = o.name">{{ o.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <!-- CATEGORIA -->
        <div class="text-white w-1/2 px-2">
          <div class="pb-2 text-base">CATEGORIA</div>
          <div class="pb-2 block text-xs" v-for="(o,i) in categorias" :key="i">
            <div class="pretty p-svg p-curve">
              <input
                @click="categoriaSeleccionada == o.name ? categoriaSeleccionada = null : categoriaSeleccionada = o.name"
                :checked="categoriaSeleccionada == o.name"
                type="checkbox"
              />
              <div class="state p-info">
                <!-- svg path -->
                <svg class="svg svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                    style="stroke: white;fill:white;"
                  />
                </svg>
                <label @click="categoriaSeleccionada = o.name">{{ o.name }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2 w-full flex justify-center md:hidden">
        <button
          @click="filtrosMobileVisible = true"
          class="btn btn-border-white px-6 py-4 rounded text-sm"
        >Filtrar Clases</button>
      </div>
    </div>
    <div class="w-full md:w-3/5 px-0 md:px-4 mb-0 md:mb-4 justify-between items-end">
      <div class="w-full">
        <!-- HEADER -->
        <div class="mb-4 mt-2 flex border-b border-grey">
          <div
            v-for="(d,j) in dias"
            :key="j"
            @click="selectDia(d.name)"
            :class="{'active': diaEvento == d.name}"
            class="dia"
          >
            <div class="sm:block hidden dia-name">{{ d.name }}</div>
            <div class="sm:hidden block dia-name">{{ d.name.substring(0,2) }}</div>
            <div class="calendario">{{ calendario[j] }}</div>
          </div>
        </div>
        <div v-if="showHorarios" class="w-full horarios h-full" :style="heightH">
          <div v-if="loading" class="flex justify-center items-center w-full h-full">
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            class="text-white text-sm mt-6 text-center w-full"
            v-if="eventosF.length == 0"
          >No hay actividades este dia</div>
          <div
            v-for="(e,i) in eventosF"
            :key="i"
            class="item-dia flex flex-wrap w-full py-3 hover:bg-grey-darker pr-4 md:pr-2 pl-2 border-b border-grey"
          >
            <div
              @click="setActiveActivity(i)"
              class="relative flex justify-between items-center w-full"
            >
              <div class="flex items-center w-1/2">
                <div class="w-1/3">
                  <img class="w-3/5 sm:w-2/5 px-1" :src="getSrcImage(e.event_name)" alt />
                </div>
                <div class="w-2/3">
                  <div class="text-white text-sm md:text-xs">{{ e.event_name }}</div>
                  <!-- <div class="my-2 text-xs text-white block md:hidden">{{ e.inicio }} {{ e.tiempo }} min</div> -->
                </div>
              </div>
              <!-- Duracion -->
              <div class="w-1/6 block">
                <div class="text-white text-xs">{{ e.tiempo }} min</div>
              </div>
              <!-- Hora inicio -->
              <div class="pl-4 w-2/6 block">
                <div class="text-white text-xs">{{ e.inicio }}</div>
              </div>
              <div class="w-auto flex pr-2 justify-end">
                <i :class="{'up' :activityActive == i}" class="icon-chevron"></i>
              </div>
            </div>
            <div class="w-1/5"></div>
            <transition
              :enter-active-class="'animated fadeInTop'"
              :duration="{ enter: 600, leave: 600 }"
              :leave-active-class="'animated fadeOutTop'"
            >
              <div
                :key="i"
                v-if="activityActive == i"
                class="w-4/5 text-xs mt-2 desc text-white"
              >{{ getDescripcionEvento(e.event_name) }}</div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Filtros clases MOBILE -->
    <div class="wrapper-contenido fixed w-100 inset-0 z-50" v-if="filtrosMobileVisible">
      <div style="max-width: 150px;" class="text-center md:hidden mx-auto block mt-4">
        <div class="my-4 title text-white text-2xl">Filtrar Clases</div>
        <!-- Objetivos -->
        <div class="py-2 text-white px-2">
          <div class="pb-4 text-base">OBJETIVO</div>
          <div
            class="pb-2 block mx-auto w-auto text-left text-xs"
            v-for="(o,i) in objetivos"
            :key="i"
          >
            <!-- <div @click="objetivoSeleccionado = o.name" class=""> 
                    <input :checked="objetivoSeleccionado == o.name" type="checkbox" name="" id="">  
                    {{ o.name }} 
            </div>-->
            <div class="pretty p-svg p-curve">
              <input
                @click="objetivoSeleccionado == o.name ? objetivoSeleccionado = null : objetivoSeleccionado = o.name"
                :checked="objetivoSeleccionado == o.name"
                type="checkbox"
              />
              <div class="state p-info">
                <!-- svg path -->
                <svg class="svg svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                    style="stroke: white;fill:white;"
                  />
                </svg>
                <label @click="objetivoSeleccionado = o.name">{{ o.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <!-- CATEGORIA -->
        <div class="text-white px-2">
          <div class="pb-4 text-base">CATEGORIA</div>
          <div
            class="pb-2 block mx-auto w-auto text-left text-xs"
            v-for="(o,i) in categorias"
            :key="i"
          >
            <div class="pretty p-svg p-curve">
              <input
                @click="categoriaSeleccionada == o.name ? categoriaSeleccionada = null : categoriaSeleccionada = o.name"
                :checked="categoriaSeleccionada == o.name"
                type="checkbox"
              />
              <div class="state p-info">
                <!-- svg path -->
                <svg class="svg svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                    style="stroke: white;fill:white;"
                  />
                </svg>
                <label @click="categoriaSeleccionada = o.name">{{ o.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="block mx-auto mt-4">
          <button
            @click="filtrosMobileVisible =false"
            class="btn px-5 py-2 rounded btn-yellow-degree"
          >Aplicar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objetivoSeleccionado: null,
      categoriaSeleccionada: null,
      filtrosMobileVisible: false,
      dias: [
        {
          name: 'Lunes'
        },
        {
          name: 'Martes'
        },
        {
          name: 'Miercoles'
        },
        {
          name: 'Jueves'
        },
        {
          name: 'Viernes'
        },
        {
          name: 'Sabado'
        },
        {
          name: 'Domingo'
        }
      ],
      eventosDesc: [
        {
          name: 'Burn',
          objetivo: ['Cardio', 'Fuerza', 'Funcional', 'Hit'],
          categoria: ['Cardio y Ritmos'],
          img: 'img/horarios/Burn.svg',
          desc: `Burn es una actividad que quemarás más de 500 kcal en tan solo 30 minutos. 
                 Un entrenamiento en circuito en 4 estaciones diferentes donde te ofrecemos 
                 365 entrenamientos cada año, uno diferente cada día.`
        },
        {
          name: 'Full Body',
          objetivo: ['Fuerza'],
          categoria: [],
          img: 'img/horarios/Full_Body.svg',
          desc: `Es un entrenamiento inspirado en movimientos de diferentes disciplinas deportivas. 
                 Mejora la resistencia cardiovascular y la fuerza y resistencia muscular. 
                 Es una clase intensa de entrenamiento interválico que combina movimientos 
                 aeróbicos atléticos con ejercicios de fuerza y estabilización postural.`
        },
        {
          name: 'Clase de Boxeo',
          objetivo: [],
          categoria: [],
          img: 'img/horarios/Body_Combat.svg',
          desc: ``
        },
        {
          name: 'Body Pump',
          objetivo: ['Fuerza'],
          categoria: ['Fuerza y tono'],
          img: 'img/horarios/Body_Pump.svg',
          desc: `Es la clase original con barra y discos que fortalece y tonifica todo el cuerpo. 
                 En una sesión de BODYPUMP trabajas los principales grupos musculares utilizando 
                 los mejores ejercicios de la sala de fitness como, por ejemplo, squats, presses, 
                 elevaciones y curls.`
        },
        {
          name: 'Cycling',
          objetivo: ['Cardio'],
          categoria: ['Cardio y Ritmos'],
          img: 'img/horarios/Cycling.svg',
          desc: `Es una clase de ciclismo indoor en la que los alumnos pedalean al ritmo de la música 
                 más motivante. Fantásticos instructores guían el pelotón a través de colinas, 
                 llanos, picos y contrarrelojes. Los participantes sudan, queman calorías y liberan endorfinas.`
        },
        {
          name: 'Body Combat',
          objetivo: ['Cardio', 'Coordinación'],
          categoria: ['Artes Marciales'],
          img: 'img/horarios/Body_Combat.svg',
          desc: `Programa de entrenamiento inspirado en las artes marciales que aumenta la resistencia 
                 cardiovascular y fortalece todo el cuerpo.`
        },
        {
          name: 'Zumba',
          objetivo: ['Coordinación'],
          categoria: ['Cardio y Ritmos', 'Movement'],
          img: 'img/horarios/Zumba.svg',
          desc: `Zumba es una disciplina fitness, enfocada por una parte a mantener un cuerpo saludable y 
                 por otra a desarrollar, fortalecer y dar flexibilidad al cuerpo mediante movimientos 
                 de baile combinados con una serie de rutinas aeróbicas`
        },
        {
          name: 'Pilates',
          objetivo: ['Flexibilidad'],
          categoria: ['Body and Mind'],
          img: 'img/horarios/Pilates.svg',
          desc: `Pilates es un método que se utiliza para entrenar a partir de la combinación de diversas disciplinas, 
                 como el yoga, la gimnasia y los ejercicios de estiramiento en general.`
        }
      ],
      loading: false,
      eventos: [],
      calendario: [],
      diaEvento: 'Lunes',
      activityActive: '',
      showHorarios: true,
      categorias: [
        {
          name: 'Artes Marciales'
        },
        {
          name: 'Body and Mind'
        },
        {
          name: 'Cardio y Ritmos'
        },
        {
          name: 'Cycling Tech'
        },
        {
          name: 'Fuerza y tono'
        },
        {
          name: 'Hit'
        },
        {
          name: 'Movement'
        }
      ],
      objetivos: [
        {
          name: 'Cardio'
        },
        {
          name: 'Coordinación'
        },
        {
          name: 'Flexibilidad'
        },
        {
          name: 'Fuerza'
        },
        {
          name: 'Funcional'
        },
        {
          name: 'Hit'
        }
      ]
    }
  },
  created() {
    this.getEventos()
    this.activityActive = -1
  },
  computed: {
    eventosF() {
      // if(this.eventos.length == 0) return [];
      let _this = this
      let array = this.eventos.filter(function(e) {
        return (
          e.dia == _this.diaEvento &&
          _this.eventosDesc.filter(function(o) {
            return o.name == e.event_name
          }).length > 0
        )
      })
      // let arrayO, arrayC = [];
      if (this.objetivoSeleccionado) {
        array = array.filter(e =>
          e.data.objetivo.includes(this.objetivoSeleccionado)
        )
      }
      if (this.categoriaSeleccionada) {
        array = array.filter(e =>
          e.data.categoria.includes(this.categoriaSeleccionada)
        )
      }
      // array = _.unionBy(arrayC,arrayO,'name');
      return array
    },
    heightH() {
      let h = 600
      if (process.client) {
        h =
          window.innerWidth > 800
            ? window.innerHeight - window.innerHeight * 0.32
            : 'auto'
        if (window.innerWidth > 800) return { height: `${h}px` }
        else return { height: `auto` }
      }
    },
    urlpath() {
      if (process.client) {
        return window.location.pathname.replace('/', '')
      }
      return 'entrenamiento'
    }
  },
  methods: {
    selectDia(dia) {
      this.activityActive = -1
      this.diaEvento = dia
    },
    getEventos() {
      // this.loading = true
      this.eventos = [
        {
          event_id: 1,
          event_name: 'Body Pump',
          instructor_name: 'Isai G.',
          event_description: `Es la original, la auténtica clase con barra y discos que fortalece y 
                tonifica todo el cuerpo. En una sesión de BODYPUMP™ trabajas los principales grupos musculares 
                utilizando los mejores ejercicios de la sala de fitness como, por ejemplo, squats, presses, 
                elevaciones y curls. Diez tracks con buena música, fantásticos instructores y 
                tu selección de peso.`,
          data: { objetivo: ['Fuerza'], categoria: ['Fuerza y tono'] },
          tiempo: 50,
          inicio: '08:00',
          dia: 'Lunes'
        },
        {
          event_id: 2,
          event_name: 'Pilates',
          instructor_name: 'Isai G.',
          event_description: `Pilates es un método que se utiliza para entrenar a partir de la combinación de diversas disciplinas, 
                              como el yoga, la gimnasia y los ejercicios de estiramiento en general.`,
          data: { objetivo: ['Flexibilidad'], categoria: ['Body and Mind'] },
          tiempo: 50,
          inicio: '08:00',
          dia: 'Lunes'
        },
        {
          event_id: 3,
          event_name: 'Burn',
          instructor_name: 'Isai G.',
          event_description: `Burn es una actividad que quemarás más de 500 kcal en tan solo 30 minutos. 
                 Un entrenamiento en circuito en 4 estaciones diferentes donde te ofrecemos 
                 365 entrenamientos cada año, uno diferente cada día.`,
          data: { objetivo: ['Fuerza'], categoria: ['Fuerza y tono'] },
          tiempo: 50,
          inicio: '18:00',
          dia: 'Martes'
        },
        {
          event_id: 4,
          event_name: 'Zumba',
          instructor_name: 'Isai G.',
          event_description: `Zumba es una disciplina fitness, enfocada por una parte a mantener un cuerpo
                              saludable y por otra a desarrollar, fortalecer y dar flexibilidad al cuerpo mediante movimientos de baile combinados con una serie de rutinas aeróbicas`,
          data: { objetivo: ['Coordinación'], categoria: ['Cardio y Ritmos','Movement'] },
          tiempo: 50,
          inicio: '18:00',
          dia: 'Martes'
        }
      ];
      this.calendario = ["09 Mar","10 Mar","11 Mar","12 Mar","13 Mar","14 Mar","15 Mar"];
      // axios.get('/api/eventos').then(res => {
      // this.eventos = res.data.eventos
      // this.calendario = res.data.calendario
      // this.loading = false
      // })
    },
    setActiveActivity(i) {
      this.showHorarios = false
      this.showHorarios = true
      this.activityActive == i
        ? (this.activityActive = null)
        : (this.activityActive = i)
    },
    getDescripcionEvento(h) {
      let e = this.eventosDesc.find(horario => horario.name == h)
      if (e) return e.desc
      return ''
    },
    getSrcImage(name) {
      let e = this.eventosDesc.find(horario => horario.name == name)
      if (e) return e.img
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.img-chevron {
  max-width: 25px;
  border: 1px solid #fafafa;
  padding: 5px;
  cursor: pointer;
  @media (max-width: 800px) {
    max-width: 20px;
  }
}

.wrapper-contenido {
  padding-top: 64px;
  background: rgba(11, 22, 39, 0.9);
}

.horarios {
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 800px) {
    overflow-y: hidden;
    height: auto !important;
  }
}

.dia {
  .dia-name {
    font-size: 0.875rem;
    color: #8795a1;
  }
  .calendario {
    font-size: 0.68rem;
    color: #8795a1;
  }
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &.active,
  &:hover {
    .dia-name {
      color: #e8b800;
    }
    .calendario {
      color: white;
    }
  }
}

.item-dia {
  transition: all 0.3s ease-out;
  .desc {
    line-height: 1.2;
    transition: all 0.3s ease-out;
  }
  .icon-chevron::before {
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: '';
    display: inline-block;
    height: 0.75em;
    position: relative;
    transition: 0.5s all ease-out;
    top: 0;
    transform: rotate(135deg);
    vertical-align: top;
    width: 0.75em;
  }
  .icon-chevron.up::before {
    top: 0.15em;
    transform: rotate(-45deg);
  }
}

// SCROLLBAR

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(128, 128, 128);
}

/* Handle */
::-webkit-scrollbar-thumb {
  // background: rgb(128, 128, 128);
  background: var(--color-bluelight);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  // background: rgb(128, 128, 128);
  background: var(--color-bluelight);
}

.VueCarousel-navigation {
  img.img-chevron {
    max-width: 25px;
    border: 1px solid #fafafa;
    padding: 5px;
  }
}

.line-grey {
  width: 100%;
  height: 1px;
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
</style>
