<template>
  <div>
    <!-- <transition name="slide-fade"> -->

    <div class="home-wrapper w-100">
      <div class="bg-custom-grey"></div>
      <div class="bg-custom-black"></div>
      <div class="contenido relative flex home-slider z-20">

        <!-- <carousel :navigationEnabled="false" :autoplay="true" :loop="true" :autoplayHoverPause="false" :speed="3500" :per-page="1" class="w-full absolute">
          <slide v-for="(o,i) in imagenes" :key="i" :class="{'VueCarousel-slide-active': i == 0}" class="h-full w-full">
            <div class="flex items-center justify-center hombre">
              <div class="position-block">
                <div class="flex flex-col justify-around">
                  <img class="img-man z-20" :style="heightImagen" :src="o.img" alt>
                </div>
              </div>
            </div>
          </slide>
        </carousel> -->
          <div class="flex w-full items-center justify-center hombre">
              <div class="position-block">
                <div class="flex flex-col justify-around">
                  <img class="object-contain img-man z-20" :style="heightImagen" src="img/man1.png" alt="Hombre Home">
                </div>
              </div>
          </div>
      </div>

      <img class="max-w-md img-fivo z-0" src="img/fivo.png" alt="Fivo Man">
      <img class="max-w-sm img-bubbles z-10" src="img/bubbles.png" alt="Bubbles">
      <!-- 24 horas -->
      <div class="circle24">
        <transition-group 
        :enter-active-class="'animated fadeIn'"
        :leave-active-class="'animated fadeOut'"
        :duration="{ enter: 500, leave: 500 }">
        <div class="z-10" v-if="day" :key="'dia'">
          <span class="block texto-circle"> 24 <span class="horas">Horas</span> </span>
        </div>
        <div class="z-10" v-else :key="'año'">
          <span class="block texto-circle"> 365 <span class="horas">Días</span> </span>
        </div>
        </transition-group>
      </div>

      <!-- Ejercicio 24 horas -->
      <div class="ejerciciohoras z-20">
        <!-- <img class src="img/ejercicio-man.jpg" alt> -->
        <div class="text-top text-dark text-sm">Fivo El primer gimnasio 24/7 de Canarias</div>
        <div class="line-white"></div>
        <div class="textoejercicios">Empieza a hacer ejercicio todos los dias</div>
      </div>

      <div class="botones">
        <nuxt-link
          to="/diasgratis"
          tag="a"
          class="btn-yellow-degree btn-yellow-hover btn-ins px-5 py-4 mr-1 sm:mr-3 rounded text-sm"
        >
          <span>Quiero 3 dias gratis</span>
        </nuxt-link>
        <a
          href="javascript:;"
          @click.prevent="goHorarios"
          class="btn-transparent btn-vermas px-5 py-4 rounded text-sm"
        >
          <span>Horario de clases</span>
        </a>
      </div>

      <!-- </transition> -->
    </div>
    
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sexo: "hombre",
      day: true,
      imagenes: [
        {
          img: require("~/assets/img/man1.png")
        },
        {
          img: require("~/assets/img/woman1.png")
        },
        {
          img: require("~/assets/img/man2.png")
        },
        {
          img: require("~/assets/img/woman2.png")
        }
      ]
    };
  },
  computed: {
    heightImagen() {
      let h = 600;
      if(process.client) { h = window.innerWidth > 800 ? window.innerHeight - 80 : 420; }
      return { height: `${h}px` };
    }
  },
  mounted() {
    setInterval(() => {
      this.day = !this.day;
    }, 3000);
  },
  methods: {
    goHorarios() {
      localStorage.setItem("horarios", true);
      this.$router.push("entrenamiento");
    }
  }
};
</script>
<style lang="scss" scoped>

.home-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  @media (max-width: 800px) {
    position: relative;
    margin-top: -64px;
  }
}

.cookies .home-wrapper {
  top: 59px;
}

.contenido {
  margin-top: 64px;
  height: calc(100vh - 64px);
  // height: 100vh;
}

.home-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.1s;
  opacity: 0;
}

.home-anim-leave-active {
  animation: going 0.5s;
}

.img-man {
  @media (max-width: 800px) {
    position: fixed;
    max-width: 360px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    margin-left: 4px;
    // max-width: 70%;
  }
}

.img-woman {
  position: absolute;
  // max-width: 360px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  @media (max-width: 576px) {
    // max-width: 70%;
  }
}

.img-fivo {
  position: absolute;
  max-width: 65%;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    display: none;
  }
}

.img-bubbles {
  position: absolute;
  // max-width: 65%;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    // display: none;
    max-width: 12rem; 
  }
}

.hombre,
.mujer {
  z-index: 30;
}

.ejerciciohoras {
  background-image: url("/img/ejercicio-man1.png");
}

.ejerciciohoras {
  position: absolute;
  background-size: cover;
  background-position: center center;
  //   max-width: 40%;
  //   max-height: 300px;
  right: 50%;
  bottom: 10%;
  width: 40%;
  height: 30%;
  .text-top {
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    // height: 1px;
    // background-color: white;
    position: absolute;
    top: 15px;
  }
  .line-white {
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: white;
    position: absolute;
    top: 40px;
    &::after {
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      background: #fff;
    }
  }
}

.textoejercicios {
  position: absolute;
  //   max-width: 40%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-size: 1.7rem;
  font-weight: 700;
  width: 85%;
}

.circle24 {
  
  border-radius: 50%;
  background-color: white;
  position: absolute;
  // overflow: hidden;
  left: 50%;
  bottom: 24%;
  z-index: 30;
  transform: translateX(-50%);
  // padding: 1.8rem 2rem;
  width: 8rem;
  height: 8rem;
  text-align: center;
  vertical-align: middle;
  -webkit-filter: blur(0);
  .texto-circle {
    font-size: 2.2rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);  
    top: 23%;
    // position: absolute;
  }
  // background: url('/img/boton-vermas.svg') no-repeat center;
  .horas {
    font-size: 1rem;
    display: block;
  }
}
.circle24::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  z-index: 20;
  animation: drop 1.4s infinite;
}
// .bordercircle24 {
//   font-size: 2.5rem;
//   border-radius: 50%;
//   position: absolute;
//   top: -17%;
//   right: -17%;
//   width: 9rem;
//   height: 9rem;
//   border: 1px solid #cacaca;
// }

.botones {
  position: absolute;
  max-width: 40%;
  right: 6%;
  bottom: 7%;
  width: auto;
  z-index: 31;
  display: flex;
  a {
    width: 232px;
    height: 70px;
    @media (max-width: 1100px) {
      width: 220px;
      height: 55px;
    }
    @media (max-width: 576px) {
      // width: 134px;
      // height: 45px;
    }
  }
}

.btn-yellow {
  padding: 1rem 1.25rem;
}

.btn-ins {
  padding: 0.2rem;
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
}

.btn-vermas {
  // border: 1px solid #8f8e8e;
  position: relative;
  min-width: 140px;
  // background: url('/img/boton-vermas2.svg') no-repeat;
  text-align: center;
  padding: 1rem 1.25rem;
  background-color: #edeff0;
  border: 1px solid #969696;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    text-align: center;
    transform: translate(-50%, -50%);
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
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 5%;
    width: 20%;
    height: 2px;
    background-color: #272727;
  }
}

.buttons-sexo {
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.block-content {
  width: 100%;
  height: calc(100vh - 55px);
  overflow: hidden;
}

.position-block {
  width: 100%;
  // top: 55px;
  bottom: 0;
  height: calc(100vh - 90px);
  // position: absolute;
}

@media (max-width: 800px) {

  // .bg-custom-grey,
  // .bg-custom-black {
  //   position: absolute !important;  
  // }
  .botones {
    left: 50%;
    bottom: 25px;
    min-width: 300px;
    transform: translateX(-50%);
  }

  .btn-vermas {
    background-color: #dfe1e291;
  }
  .btn-ins {
    // display:;
  }

  .ejerciciohoras {
    max-width: 400px;
    min-width: 300px;
    left: 50%;
    transform: translateX(-50%);
    height: 118px;
    bottom: 17%;
  }

  .textoejercicios {
    left: 40%;
    width: 72%;
    top: 60%;
    font-size: 1.2rem;
  }
  .text-top {
    left: 40% !important;
    width: 72% !important;
    font-size: 0.7rem;
  }
  .line-white {
    transform: translateX(0) !important;
    left: auto !important;
    width: 95% !important;
    right: 0% !important;
  }

  .circle24 {
    left: 50%;
    transform: translateX(-50%);
    top: 11%;
    z-index: 10;
  }
  
}

@media (max-width: 550px) {
  .ejerciciohoras {
    // height: 25%;
    // bottom: 20%;
  }

  .textoejercicios {
    // left: 40%;
    // width: 72%;
    // font-size: 1.1rem;
  }
  .line-white,
  .text-top {
    left: 40%;
    width: 72%;
  }

  .circle24 {
    top: 11%;
    font-weight: 500;
  }

  .buttons-sexo {
    top: 30%;
  }
}

@media (max-width: 440px) {
  .textoejercicios {
    left: 50%;
    top: 55%;
    width: 95%;
    font-size: 1rem;
  }

  .circle24 {
    top: 11%;
    font-weight: 500;
    padding: 1.4rem 1.5rem;
  }

  .buttons-sexo {
    top: 30%;
  }

  .btn-yellow {
    padding: 1rem 0.6rem;
  }

  .botones {
    right: 9%;
    bottom: 4%;
  }
}
</style>

