<template>
  <div>
    <div class="bg-custom-black-fivo"></div>
    <div class="w-full">
      <transition
        v-on:before-enter="beforeEnter"
        v-on:after-enter="afterEnter"
        :enter-active-class="pasoAdelante ? 'animated fadeInRight' : 'animated fadeInLeft'"
        :leave-active-class="pasoAdelante ? 'animated fadeOutLeft' : 'animated fadeOutRight'"
        :duration="{ enter: 1000, leave: 400 }"
      >
        <!-- PASO 1 -->
        <div data-index="1" v-if="pasoActivo == 1" class="bg-planes absolute w-100 inset-x-0">
          <div
            class="mx-4 sm:mx-12 md:mx-24 xl:ml-32 lg:ml-24 lg:mr-24 contenido flex flex-wrap content-start"
          >
            <compra-planes-v2
              @paso="setPasoActivo"
              :caracteristicas-planes="caracteristicaPlanes"
              :planes-pruebas="planesPruebas"
              :planes="planes"
            ></compra-planes-v2>
          </div>
        </div>

        <!-- PASO 2 -->
        <compra-datos-personales data-index="2" @paso="setPasoActivo" v-if="pasoActivo == 2"></compra-datos-personales>

        <!-- PASO 4  - DATOS TARJETA -->
        <compra-datos-tarjeta
          data-index="3"
          @paso="setPasoActivo"
          :loading.sync="loading"
          :keystripe="'pk_stripe'"
          v-if="pasoActivo == 3"
        ></compra-datos-tarjeta>
      </transition>
      <!-- COMPRA EXITOSA -->
      <compra-success v-if="success"></compra-success>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CompraPlanes from '~/pages/planes/planes-v2.vue'
import CompraDatosPersonales from '~/pages/planes/datos-personales.vue'
import CompraDatosTarjeta from '~/pages/planes/datos-tarjeta.vue'
import CompraSuccess from '~/pages/planes/success.vue'
export default {
  data() {
    return {
      success: false,
      loading: false,
      pasoActivo: 1,
      error: '',
      planes: [],
      planesPruebas: [],
      caracteristicaPlanes: [],
      pasoAdelante: true
    }
  },
  components: {
    'compra-planes-v2': CompraPlanes,
    CompraDatosPersonales,
    CompraDatosTarjeta,
    CompraSuccess
  },
  computed: mapState([
    'plan',
    'tokenStripe',
    'datosPersonales',
    'datosPago',
    'fechaComienzo'
  ]),
  created() {
    this.getPlanes()
    // let pdfName = "Resumen-FIVO";
    // this.getImageFromUrl("img/fivopdf.png");
  },
  methods: {
    beforeEnter: function(el) {
      console.log(el)
    },
    afterEnter: function(el) {
      if (this.pasoActivo == 1) this.pasoAdelante = true
    },
    getPlanes() {
      this.planes = [
        {
          id: 2,
          idPlan: '16536',
          nombre: 'Mensual Amiga',
          pagoUnico: null,
          pagoMensual: '38.90',
          frecuenciaPago: 'Every month',
          duracion: 'until further notice',
          visible: 1,
          deleted_at: null,
          suscripcionesDisponibles: 150,
          activo: 1,
          caracteristicas: [
            {
              id: 6,
              plan_id: 2,
              caracteristica_id: 2,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 2,
                nombre: 'Acceso 24 horas'
              }
            },
            {
              id: 10,
              plan_id: 2,
              caracteristica_id: 3,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 3,
                nombre: 'Cancela cuando quieras'
              }
            },
            {
              id: 14,
              plan_id: 2,
              caracteristica_id: 4,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 4,
                nombre: 'Candado de obsequio'
              }
            },
            {
              id: 18,
              plan_id: 2,
              caracteristica_id: 5,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 5,
                nombre: 'Inscripción gratuita'
              }
            }
          ]
        },
        {
          id: 3,
          idPlan: '16609',
          nombre: 'Anual',
          pagoUnico: null,
          pagoMensual: '399.00',
          frecuenciaPago: 'Every 12 months',
          duracion: 'until further notice',
          visible: 1,
          created_at: '2019-02-04 17:57:36',
          updated_at: '2019-08-24 22:33:37',
          deleted_at: null,
          suscripcionesDisponibles: 148,
          activo: 1,
          caracteristicas: [
            {
              id: 7,
              plan_id: 3,
              caracteristica_id: 2,
              tieneCaracteristica: 1,
              created_at: '2019-02-05 15:43:39',
              updated_at: '2019-02-05 15:44:18',
              caracteristica: {
                id: 2,
                nombre: 'Acceso 24 horas',
                created_at: '2019-02-05 15:43:39',
                updated_at: '2019-02-05 15:43:39'
              }
            },
            {
              id: 11,
              plan_id: 3,
              caracteristica_id: 3,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 3,
                nombre: 'Cancela cuando quieras'
              }
            },
            {
              id: 15,
              plan_id: 3,
              caracteristica_id: 4,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 4,
                nombre: 'Candado de obsequio'
              }
            },
            {
              id: 19,
              plan_id: 3,
              caracteristica_id: 5,
              tieneCaracteristica: 1,
              caracteristica: {
                id: 5,
                nombre: 'Inscripción gratuita'
              }
            }
          ]
        }
      ]
      this.planesPruebas = [
        {
          id: 4,
          idPlan: '16610',
          nombre: 'Pago por uso',
          pagoUnico: null,
          pagoMensual: '7.90',
          frecuenciaPago: null,
          duracion: '1 day',
          visible: 0,
          deleted_at: null,
          suscripcionesDisponibles: 150,
          activo: 1,
          titulo: '1 dia',
          texto: 'Un dia'
        },
        {
          id: 21,
          idPlan: '18374',
          nombre: 'Pase 3 días',
          pagoUnico: null,
          pagoMensual: '14.90',
          frecuenciaPago: null,
          duracion: '3 days',
          visible: 0,
          deleted_at: null,
          suscripcionesDisponibles: null,
          activo: 1,
          titulo: '3 dias',
          texto: 'Tres dias consecutivos'
        },
        {
          id: 22,
          idPlan: '18375',
          nombre: 'Pase 7 días',
          pagoUnico: null,
          pagoMensual: '19.90',
          frecuenciaPago: null,
          duracion: '1 week',
          visible: 0,
          deleted_at: null,
          suscripcionesDisponibles: null,
          activo: 1,
          titulo: '7 dias',
          texto: 'Siete dias consecutivos'
        },
        {
          id: 23,
          idPlan: '18376',
          nombre: 'Pase 15 días',
          pagoUnico: null,
          pagoMensual: '25.90',
          frecuenciaPago: null,
          duracion: '15 days',
          visible: 0,
          deleted_at: null,
          suscripcionesDisponibles: null,
          activo: 1,
          titulo: '15 dias',
          texto: 'Quince dias consecutivos'
        }
      ]

      this.caracteristicaPlanes = {
        '2': [
          {
            id: 6,
            plan_id: 2,
            caracteristica_id: 2,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:43:39',
            updated_at: '2019-02-05 15:44:19',
            caracteristica: {
              id: 2,
              nombre: 'Acceso 24 horas',
              created_at: '2019-02-05 15:43:39',
              updated_at: '2019-02-05 15:43:39'
            },
            plan: {
              id: 2,
              idPlan: '16536',
              nombre: 'Mensual Amiga',
              pagoUnico: null,
              pagoMensual: '38.90',
              frecuenciaPago: 'Every month',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-07-16 19:55:38',
              deleted_at: null,
              suscripcionesDisponibles: 150,
              activo: 1
            }
          },
          {
            id: 7,
            plan_id: 3,
            caracteristica_id: 2,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:43:39',
            updated_at: '2019-02-05 15:44:18',
            caracteristica: {
              id: 2,
              nombre: 'Acceso 24 horas',
              created_at: '2019-02-05 15:43:39',
              updated_at: '2019-02-05 15:43:39'
            },
            plan: {
              id: 3,
              idPlan: '16609',
              nombre: 'Anual',
              pagoUnico: null,
              pagoMensual: '399.00',
              frecuenciaPago: 'Every 12 months',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-08-24 22:33:37',
              deleted_at: null,
              suscripcionesDisponibles: 148,
              activo: 1
            }
          }
        ],
        '3': [
          {
            id: 10,
            plan_id: 2,
            caracteristica_id: 3,
            tieneCaracteristica: 1,
            caracteristica: {
              id: 3,
              nombre: 'Cancela cuando quieras'
            },
            plan: {
              id: 2,
              idPlan: '16536',
              nombre: 'Mensual Amiga',
              pagoUnico: null,
              pagoMensual: '38.90',
              frecuenciaPago: 'Every month',
              duracion: 'until further notice',
              visible: 1,
              deleted_at: null,
              suscripcionesDisponibles: 150,
              activo: 1
            }
          },
          {
            id: 11,
            plan_id: 3,
            caracteristica_id: 3,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:45:18',
            updated_at: '2019-02-05 15:45:27',
            caracteristica: {
              id: 3,
              nombre: 'Cancela cuando quieras',
              created_at: '2019-02-05 15:45:18',
              updated_at: '2019-02-05 15:45:18'
            },
            plan: {
              id: 3,
              idPlan: '16609',
              nombre: 'Anual',
              pagoUnico: null,
              pagoMensual: '399.00',
              frecuenciaPago: 'Every 12 months',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-08-24 22:33:37',
              deleted_at: null,
              suscripcionesDisponibles: 148,
              activo: 1
            }
          }
        ],
        '4': [
          {
            id: 14,
            plan_id: 2,
            caracteristica_id: 4,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:47:07',
            updated_at: '2019-02-17 17:31:51',
            caracteristica: {
              id: 4,
              nombre: 'Candado de obsequio',
              created_at: '2019-02-05 15:47:07',
              updated_at: '2019-02-05 15:47:07'
            },
            plan: {
              id: 2,
              idPlan: '16536',
              nombre: 'Mensual Amiga',
              pagoUnico: null,
              pagoMensual: '38.90',
              frecuenciaPago: 'Every month',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-07-16 19:55:38',
              deleted_at: null,
              suscripcionesDisponibles: 150,
              activo: 1
            }
          },
          {
            id: 15,
            plan_id: 3,
            caracteristica_id: 4,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:47:07',
            updated_at: '2019-02-05 15:47:56',
            caracteristica: {
              id: 4,
              nombre: 'Candado de obsequio',
              created_at: '2019-02-05 15:47:07',
              updated_at: '2019-02-05 15:47:07'
            },
            plan: {
              id: 3,
              idPlan: '16609',
              nombre: 'Anual',
              pagoUnico: null,
              pagoMensual: '399.00',
              frecuenciaPago: 'Every 12 months',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-08-24 22:33:37',
              deleted_at: null,
              suscripcionesDisponibles: 148,
              activo: 1
            }
          }
        ],
        '5': [
          {
            id: 18,
            plan_id: 2,
            caracteristica_id: 5,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:47:39',
            updated_at: '2019-02-17 17:31:52',
            caracteristica: {
              id: 5,
              nombre: 'Inscripción gratuita',
              created_at: '2019-02-05 15:47:39',
              updated_at: '2019-02-05 15:47:39'
            },
            plan: {
              id: 2,
              idPlan: '16536',
              nombre: 'Mensual Amiga',
              pagoUnico: null,
              pagoMensual: '38.90',
              frecuenciaPago: 'Every month',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-07-16 19:55:38',
              deleted_at: null,
              suscripcionesDisponibles: 150,
              activo: 1
            }
          },
          {
            id: 19,
            plan_id: 3,
            caracteristica_id: 5,
            tieneCaracteristica: 1,
            created_at: '2019-02-05 15:47:39',
            updated_at: '2019-02-05 15:48:00',
            caracteristica: {
              id: 5,
              nombre: 'Inscripción gratuita',
              created_at: '2019-02-05 15:47:39',
              updated_at: '2019-02-05 15:47:39'
            },
            plan: {
              id: 3,
              idPlan: '16609',
              nombre: 'Anual',
              pagoUnico: null,
              pagoMensual: '399.00',
              frecuenciaPago: 'Every 12 months',
              duracion: 'until further notice',
              visible: 1,
              created_at: '2019-02-04 17:57:36',
              updated_at: '2019-08-24 22:33:37',
              deleted_at: null,
              suscripcionesDisponibles: 148,
              activo: 1
            }
          }
        ]
      }
      // axios.get("/api/planes").then(res => {
      //   this.planes = res.data.planes;
      //   this.caracteristicaPlanes = res.data.caracteristicas;
      //   this.planesPruebas = res.data.planesPruebas;
      // });
    },
    setPasoActivo(val) {
      if (val < this.pasoActivo) this.pasoAdelante = false
      else this.pasoAdelante = true

      if (val == 4) this.suscribirse()
      else this.pasoActivo = val
    },
    suscribirse() {
      this.success = true
      // let data = Object.assign(
      //   { plan: this.plan },
      //   { persona: this.datosPersonales },
      //   { tokenStripe: this.tokenStripe },
      //   { fechaComienzo: this.fechaComienzo }
      // )
      // this.loading = true
      // axios.post('/api/payment', data).then(res => {
      //     axios.post('/api/suscripcion', data).then(r => {
      //         this.loading = false
      //         this.success = true
      //       },
      //       er => {
      //         console.log(er)
      //         this.loading = false
      //         this.success = true
      //         this.error = er.data
      //       }
      //     )
      //   },
      //   error => {
      //     console.log(error)
      //     this.error = error.data
      //   }
      // )
    }
  }
}
</script>
<style lang="scss" scoped>
.left-side {
  position: absolute;
  left: 0;
  width: 50%;
  height: calc(100% - 55px);
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    .title {
      font-size: 3rem;
    }
    .subtitle {
      line-height: 1.4;
    }
  }
}

.bg-planes {
  background-color: #000f23;
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
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 3px;
    height: 3px;
    background: #fff;
  }
}

.contenido {
  // height: calc(100vh - 70px);
}
</style>

