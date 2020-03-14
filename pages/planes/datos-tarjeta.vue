<template>
  <!-- Inscripcion -->
  <div>
    <div class="absolute bg-blue-custom w-100 inset-x-0">
      <div class="mx-4 sm:mx-20 md:mx-24 lg:mx-32 lg:px-12 contenido flex flex-wrap items-center justify-center content-center">
        <div class="flex flex-wrap w-full">
          <!-- 1 -->
          <div class="w-full md:w-1/2 px-2 lg:px-6 xl:px-10">
            <div class="w-full">
              <!-- <div class="line-grey w-full lg:w-2/5"></div> -->
              <div class="my-4 title text-white text-3xl">Inscripción</div>
              <div class="line-grey w-full lg:w-3/5 relative"></div>
              <div class="mt-2 title text-white">Información de pago</div>
            </div>
            <div class="w-full mt-4">
              <!-- <formulario-stripe @pay="continuar" :keystripe="keystripe" :checkPay="checkPay"></formulario-stripe> -->
            </div>
            <!-- Continuar -->
            <!-- <div class="mt-6 w-full flex flex-wrap items-center justify-between">
              <div>
                <button class="btn btn-violeta px-10 py-4 rounded text-sm mr-3 hovering ld-ext-right"
                        :class="{'running': loading}"
                        @click="chequearPago">
                          <span> Siguiente </span>
                          <div style="color:#fff" class="ld ld-ring ld-spin"></div>
                </button>
                <button
                  class="btn bg-transparent text-yellow py-4 rounded text-sm"
                  @click="volver"
                >Volver</button>
              </div>
              <div>
                <div class="text-yellow text-xs">PASO 04 / 05</div>
              </div>
            </div> -->
            <!-- Continuar -->
            <div class="mt-6 w-full flex flex-wrap items-center justify-between">
              <div>
                <button class="btn btn-yellow px-6 py-4 rounded text-sm mr-3 hovering ld-ext-right"
                        :class="{'running': loading}"
                        @click="chequearPago"> 
                        <span> Pagar </span>
                        <div style="color:#fff" class="ld ld-ring ld-spin"></div>
                </button>
                <a download="" class="btn btn-border-white py-4 rounded text-sm" href="/pdf/tyc.pdf">Descargue los Términos </a>
              </div>
            </div>
          </div>
          <!-- 2 - Resumen -->
          <div class="w-full md:w-1/2 pb-2 px-2 lg:px-6 xl:px-10">
            <div class="w-full">
              <div class="my-4 title text-white text-2xl sm:text-3xl"> Resumen de Compra </div>
              <div class="line-grey w-full lg:w-3/5 relative"></div>
            </div>
            <div class="mt-6 w-full">
              <compra-resumen @paso="$emit('paso',1)"></compra-resumen>
            </div>
            <div class="w-full text-sm pt-4">
              <span class="text-white"> Al finalizar aceptas nuestros </span>
              <a class="text-yellow"> términos y condiciones </a>
              <span class="text-white"> y nuestras </span>
              <a class="text-yellow"> políticas de tratamiento de datos </a>
            </div>
          </div>

            <!-- Stripe -->
            <div class="md:hidden flex mt-4 w-full justify-center">
              <div class="">
                <img class="w-50 img-stripe" src="img/stripe.png" alt="">
              </div>
            </div>

            <div class="wrapper-stripe hidden md:flex">
                <img class="w-50" src="img/stripe.png" alt="">
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CompraResumen from '~/pages/planes/resumen.vue'
export default {
  data() {
    return {
      checkPay: false,
      loadingB: false
    };
  },
  created() {
    this.form = this.datosPago;
  },
  components: {
    CompraResumen
  },
  props: {
    keystripe: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    loading: function(old,newVal) {
      this.loadingB = newVal;
    }
  },
  computed: {
    ...mapState(["plan", "datosPago"]),
    ...mapGetters(["subtotal", "tax", "total"])
  },
  methods: {
    ...mapActions(["set_datos_pago"]),
    continuar(value) {
      //   this.set_datos_pago(this.form);
      // this.loading = false;
      if(value) this.$emit("paso", 4);
    },
    volver() {
      //   this.set_datos_pago(this.form);
      this.$emit("paso", 3);
    },
    chequearPago() {
      // this.loadingB = true;
      // this.checkPay = !this.checkPay;
      this.$emit("paso", 4);
    }
  }
};
</script>
<style lang="scss" scoped>
.contenido {
  //   height: calc(100vh - 70px);
}

.line-grey {
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
.img-stripe {
  max-width: 100px;
}

.wrapper-stripe {
  position: fixed;  
  left: 2%;
  bottom: 2%; 
  img {
    width: 85px;
    height: 60px;
  }
}
</style>
