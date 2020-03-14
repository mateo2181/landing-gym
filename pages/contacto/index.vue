<template>
  <div>
    <!-- <btn-inscribiteahora class="invisible md:visible"></btn-inscribiteahora> -->
    <div class="bg-custom-black-fivo"></div>
    <!-- <div class="col-12"> -->
    <div class="absolute bg-blue-darkest w-100 left-0 right-0">
      <div class="overflow-auto md:overflow-hidden contenido flex flex-wrap  items-start md:items-center content-center md:content-around">
        <div class="flex w-full flex-wrap">
        <!-- 1 _ Contacto -->
        <div class="w-full flex items-center md:w-2/5 mt-6">
          <div class="relative w-full mx-8 sm:mx-16 md:mr-0 md:ml-12 lg:ml-32">
            <div class="line-grey"></div>
            <div class="my-4 title text-white text-3xl">Contacto</div>
            <div class="my-0 md:my-5 subtitle text-white text-xs">
                <div class="mb-0 md:mb-4"> hola@fivogym.es </div>
            </div>
            <form class="pt-3" action="">
                <!-- Nombre -->
                <div class="wrapper-input mb-3">
                    <input type="text" v-model="nombre" placeholder="Nombre">
                </div>
                <!-- Correo electrónico -->
                <div class="wrapper-input mb-3">
                    <input type="text" v-model="correo" placeholder="Correo Electrónico">
                </div>
                <!-- Escribe tu mensaje -->
                <div class="wrapper-input mb-3">
                    <input type="text" v-model="mensaje" placeholder="Escribe tu mensaje">
                </div>
                <div v-if="success" class="w-full my-2 text-green-dark">
                  {{ success }}
                </div>
                <div class="w-full pt-3 md:pt-6">
                <button @click.prevent="sendMensaje" class="btn btn-violeta px-10 py-4 rounded text-sm mr-3"> Enviar </button>
                </div>
            </form>
          </div>
        </div>
        <!-- Mapa -->
        <div class="w-full md:w-3/5 mb-8">
            <div class="relative sm:mx-2 md:ml-2 md:mr-24 lg:ml-0 lg:mr-32">
              
              <div class="block img-wrapper-lg mx-auto w-full">
                <img src="img/mapa.svg" alt>
                  <a class="btn-comollegar" 
                     target="_blank"
                     href="https://www.google.com/maps/place/Wellness+Emotion/@27.999734,-15.4200517,17z/data=!3m1!4b1!4m5!3m4!1s0xc4097e624bc6ceb:0x29045223c86e5e08!8m2!3d27.999734!4d-15.417863">  
                        <span> Como llegar </span>
                        <img src="img/map-marker.svg" alt="">
                  </a>
              </div>
              <!-- <div class="block md:hidden img-wrapper mx-auto w-2/3 sm:w-1/2 md:w-full">
                <img src="img/mapa_movil.svg" alt>
              </div> -->

            </div>
        </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
      success: null
    }
  },
  methods: {
    sendMensaje() {
      if(this.nombre != '' && this.correo != '' && this.mensaje != '')
      {
        this.success = 'Su mensaje ha sido recibido. En breve nos comunicaremos con usted.'
      }
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

.btn-comollegar {
  // border: 1px solid #8f8e8e;
  position: absolute;
  right: 30%;
  color: white;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  top: 73%;
  width: 140px;
  // background: url('/img/boton-vermas2.svg') no-repeat;
  text-align: center;
  padding: 1.3rem 1.25rem;
  background-color: transparent;
  border: 0.7px solid #E8B800;
  img {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    text-align: center;
    transform: translate(-50%,-50%);
  }
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: 5%;
    width: 20%;
    height: 3px;
    background-color: #E8B800;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 5%;
    width: 20%;
    height: 3px;
    background-color: #E8B800;
  }
}

</style>

