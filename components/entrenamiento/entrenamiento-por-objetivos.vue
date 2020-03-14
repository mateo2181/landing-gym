<template>
<div class="wrapper-contenido fixed w-100 inset-0 z-50">
    <div class="contenido relative objetivos overflow-hidden objetivos-slider flex flex-wrap items-start md:items-end content-center md:content-around">
       <transition :enter-active-class="'animated fadeInRight'" 
                :leave-active-class="'animated fadeOutRight'"
                :duration="{ enter: 1500, leave: 400 }">
      <!-- <span  class="icon-close">  -->
        <div v-if="closeVisible" @click="close" class="icon-close" :class="{'closed': closed }"></div>

    </transition>
        <!-- <div class="w-full"> -->
            <carousel 
                  :navigationEnabled="true"
                  :paginationEnabled="false"
                  :navigationNextLabel="`<div><img class='img-chevron' src='img/right-chevron.svg'></div>`"
                  :navigationPrevLabel="`<div><img class='img-chevron' src='img/left-chevron.svg'></div>`"  
                  :per-page="1" class="carousel-entrenamiento-objetivos mt-4 md:mt-0 w-full">
            <!-- SLIDER OBJETIVOS -->
            <slide v-for="(o,i) in objetivos" :key="i" class="h-full w-full"> 
              <div class="h-full relative flex flex-wrap items-center mx-4 sm:mx-8 md:mx-16 lg:mx-24">

                  <!-- <img class="img-central" :style="heightImagen" src="img/objetivo-man1.png" alt> -->
                  <!-- <img class="img-fivo" src="img/fivo3.svg" alt="Fivo"> -->

                  <div class="w-full flex items-center md:w-1/2 mt-6">
                      <div class="relative justify-around w-full h-full">
                        <div class="w-full text-left text-white text-lg md:text-4xl"> {{ o.title }} </div>

                            <div class="mt-2 w-full text-left text-gray-400 text-sm leading-normal">
                                {{ o.texto }}
                            </div>
                      </div>
                  </div>
                  <!-- Flexible -->
                  <div class="w-full flex items-center md:w-1/2 mt-2 md:mt-6">
                    <div class="relative w-full mx-4 flex justify-center">
                        <div class="relative mx-auto w-4/5 text-center">
                              <img class="w-full sm:w-2/3 md:w-full" :src="o.img" :alt="o.title">
                        </div>
                    </div>
                  </div>
              </div>
            </slide>
            </carousel>

      </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        closeVisible: false,
        closed: false,
        objetivos: [
          {
            img: 'img/objetivos/reloj.svg',
            title: 'Flexible',
            texto: `Tu tiempo es lo mas valioso que tienes y debes aprovecharlo conciliando 
                    el trabajo, la familia y el ocio. Nuestro concepto Siempre Abierto te facilita que te 
                    ejercites cuando quieras. Por la mañana, por la tarde, por la noche o durante la madrugada.
                    Un gimnasio abierto 24 horas al dia durante todo el año, los meses que tu quiera, para que 
                    nadie marque tu horario.`
          },
          {
            img: 'img/objetivos/cel-1.svg',
            title: 'Inteligente',
            texto: `La última tecnologia cambiará tu forma de relacionarte con el gimnasio.
                      Todos los procesos están automatizados y tendrás una atención constante y clara,
                      sin intermediarios. Inscribete, ve a la rutina que necesitas para ejercitarte,
                      acude a la clase que desees el tiempo que desees y a la hora que mejor te venga
                      a través de aplicaciones sencillas e intuitivas que te acompañarán 
                      durante toda tu estancia en FIVO. `
          },
          {
            img: 'img/objetivos/cuete.svg',
            title: 'Vanguardista',
            texto: `Entrando en FIVO estas apostando por la vanguardia y serás de las primeras personas en Canarias
                    que forme parte de un club exclusivo y pionero donde el concepto tiempo no existe.
                    Abre la puerta al futuro y observa desde primera linea el cambio.`
          },
          {
            img: 'img/objetivos/cel-2.svg',
            title: 'Optimizado',
            texto: `Cada entrenamiento que realizes en FIVO está perfectamente estudiado para 
                    que lo aproveches al máximo y logres tus objetivos cuanto antes.
                    Los circuitos elaborados según las técnicas de entrenamiento mas efectivas
                    te permitirán mejorar tus objetivos y marcas en un menor período de tiempo.
                    Afronta los retos semanales mientras te diviertes. `
          }
        ]
      }
    },
    created() {
      let _this = this;
      setTimeout(function() {
        _this.closeVisible = true;
      },1000);
    },
    computed: {
        heightImagen() {
          let h = 600;
          if(process.client) {
            h = window.innerWidth > 800 ? window.innerHeight - 80 : window.innerHeight - (window.innerHeight*0.08); 
          }
          return { height: `${h}px` };
        }
    },
    methods: {
      close() {
        let _this = this;
        this.closed = true;
        setTimeout(function() {
          _this.$emit('close',true);
        },500);
      }
    }
}
</script>

<style lang="scss" scoped>
.contenido {
    margin-top: 0px;
    // background: rgba(11, 22, 39, 0.9);
}

.wrapper-contenido {
  margin-top: 64px;
  background: rgba(11, 22, 39, 0.9);
}

.icon-close{
    // position: relative;
    position: absolute;
    width: 75px;
    height: 75px;
    right: 10px;
    top: 5px;
    z-index: 30;
    cursor: pointer;  
    @media(max-width:650px) {
      width: 50px;
      height: 50px;
    }

    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: rgb(218, 218, 218);
        transition: transform 0.25s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 3px;
        height: 100%;
        margin-left: -2px;
        transform: rotate(45deg);
    }

    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        margin-top: -1px;
        transform: rotate(225deg);
    }
    
    &.closed{
        cursor: pointer;
        
        &:before{ transform: rotate(90deg); }
        &:after{ transform: rotate(180deg); }
    }
}
</style>
