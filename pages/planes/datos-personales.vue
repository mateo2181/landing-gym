<template>
  <!-- Inscripcion -->
  <div>
    <div class="absolute bg-blue-darkest w-100 inset-x-0">
      <div
        class="mx-4 sm:mx-20 md:mx-24 lg:mx-32 lg:pr-12 lg:pl-2 contenido flex flex-wrap items-center content-start sm:content-center"
      >
        <div class="flex flex-wrap w-full">
          <!-- 1 -->
          <div class="w-full md:w-1/2 px-2 lg:px-6 xl:px-10">
            <div class="w-full">
              <div class="py-2 md:py-4 title text-white text-3xl">Información personal</div>
              <div class="line-grey w-full lg:w-3/5 relative"></div>
            </div>
            <div class="w-full mt-4">
              <ValidationObserver ref="observer" v-slot="{ invalid }">
              <div class="w-full flex flex-wrap mb-2">
                <!-- Nombre -->
                <div class="w-full sm:w-1/2 mb-2 pr-1">
                  <ValidationProvider name="nombre" rules="required" v-slot="{ errors }">
                    <div class="w-full wrapper-input mb-0 md:mb-1">
                      <input type="text" name="nombre" v-model="form.nombre" placeholder="Nombre" />
                    </div>
                    <div class="w-full mb-1 text-xs text-red-500">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <!-- Apellido -->
                <div class="w-full sm:w-1/2 mb-2 pr-1">
                  <ValidationProvider name="apellido" rules="required" v-slot="{ errors }">
                    <div class="w-full wrapper-input mb-0 md:mb-1">
                      <input type="text" name="apellido" v-model="form.apellido" placeholder="Apellido"/>
                    </div>
                    <div class="w-full mb-1 text-xs text-red-500">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
              </div>

              <!-- <div class="w-full flex flex-wrap mb-2"> -->
              <!-- Email -->
              <div class="w-full mb-2 pr-1">
                <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                <div class="wrapper-input mb-4">
                  <input type="email" name="email" v-model="form.correo" placeholder="Email"/>
                </div>
                <div class="w-full mb-1 text-xs text-red-500">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <!-- </div> -->

              <div class="w-full flex flex-wrap mb-2">
                <!-- Dni -->
                <div class="w-full sm:w-1/2 mb-2 pr-1">
                <ValidationProvider name="dni" rules="required" v-slot="{ errors }">
                  <div class="wrapper-input mb-4">
                    <input type="text" name="dni" v-model="form.dni" placeholder="N° de Documento"/>
                  </div>
                  <div class="w-full mb-1 text-xs text-red-500">{{ errors[0] }}</div>
                </ValidationProvider>
                </div>
                <!-- Fecha de nacimiento -->
                <div class="w-full sm:w-1/2 mb-2">
                  <!-- <label class="w-full text-sm label">Fecha de nacimiento</label> -->
                  <div class="wrapper-input mb-4">
                    <input type="text" name="fechaNacimiento" v-model="form.fechaNacimiento" placeholder="Fecha de Nacimiento"/>
                  </div>
                  <!-- <div class="w-full mb-1 text-xs text-red-500" v-show="errors.has('fechaNacimiento')"> {{ errors.first('fechaNacimiento') }}  </div> -->
                </div>
              </div>

              <div class="w-full flex flex-wrap mb-2">
                <!-- Direccion -->
                <div class="w-full sm:w-1/2 mb-2 pr-1">
                  <div class="wrapper-input">
                    <input
                      type="text"
                      name="direccion"
                      v-model="form.direccion"
                      placeholder="Dirección"
                    />
                  </div>
                  <!-- <div class="w-full mb-1 text-xs text-red-500" v-show="errors.has('direccion')">{{ errors.first('direccion') }}</div> -->
                </div>
                <!-- Telefono -->
                <div class="w-full sm:w-1/2 mb-2 pr-1">
                  <div class="wrapper-input">
                    <input
                      type="text"
                      name="telefono"
                      v-model="form.telefono"
                      placeholder="Número de Teléfono"
                    />
                  </div>
                  <!-- <div class="w-full mb-1 text-xs text-red-500" v-show="errors.has('telefono')">{{ errors.first('telefono') }}</div> -->
                </div>
              </div>

              <!-- Sexo -->
              <div class="w-full flex flex-wrap mb-4">
                <div class="w-full pb-4">
                  <label class="label text-sm" for>Sexo</label>
                </div>
                <div class="w-auto pr-8">
                  <div class="pretty p-default p-round">
                    <input type="radio" v-model="form.sexo" name="sexo" value="Masculino" />
                    <div class="state p-custom-o">
                      <label class="text-gray-700">Masculino</label>
                    </div>
                  </div>
                </div>
                <div class="w-auto">
                  <div class="pretty p-default p-round">
                    <input type="radio" v-model="form.sexo" name="sexo" value="Femenino" />
                    <div class="state p-custom-o">
                      <label class="text-gray-700">Femenino</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Noticias -->
              <div class="w-full">
                <div class="pretty p-default p-curve p-thick">
                  <input type="checkbox" v-model="form.noticias" />
                  <div class="state p-warning">
                    <label class="text-gray-700">Quiero recibir noticias de Fivo por e-mail</label>
                  </div>
                </div>
              </div>
              </ValidationObserver>
            </div>
            <!-- Continuar -->
            <div class="mt-6 w-full flex flex-wrap items-center justify-between">
              <div>
                <button
                  class="btn btn-yellow px-6 py-4 rounded text-sm mr-3"
                  @click="continuar"
                >Siguiente</button>
                <a
                  download
                  class="btn btn-border-white py-4 rounded text-sm"
                  href="/pdf/tyc.pdf"
                >Descargue los Términos</a>
              </div>
            </div>
          </div>
          <!-- 2 - Resumen -->
          <div class="w-full my-4 md:my-0 md:w-1/2 pb-2 px-2 lg:px-6 xl:px-10">
            <div class="w-full">
              <div class="py-2 md:py-4 title text-white text-2xl sm:text-4xl">Resumen de Compra</div>
              <div class="line-grey w-full lg:w-3/5 relative"></div>
            </div>
            <div class="mt-6 w-full">
              <compra-resumen @paso="$emit('paso',1)"></compra-resumen>
            </div>
            <div class="w-full text-sm pt-4">
              <span class="text-white">Al finalizar aceptas nuestros</span>
              <a
                download
                class="text-yellow no-underline hover:underline"
                href="/pdf/tyc.pdf"
              >términos y condiciones</a>
              <span class="text-white">y nuestras</span>
              <a class="text-yellow">políticas de tratamiento de datos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CompraResumen from '~/pages/planes/resumen.vue'
export default {
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        dni: '',
        // nacDia: "",
        // nacMes: "",
        // nacAño: "",
        fechaNacimiento: '',
        sexo: '',
        direccion: '',
        telefono: '',
        noticias: false
      }
    }
  },
  created() {
    this.form = this.datosPersonales
  },
  components: {
    CompraResumen
  },
  computed: {
    ...mapState(['plan', 'costoTarjeta', 'datosPersonales']),
    ...mapGetters(['subtotal', 'tax', 'total'])
  },
  methods: {
    ...mapActions(['set_datos_personales']),
    continuar() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          this.set_datos_personales(this.form)
          this.$emit('paso', 3)
        }
      })
    },
    volver() {
      this.set_datos_personales(this.form)
      this.$emit('paso', 2)
    }
  }
}
</script>
<style lang="scss" scoped>
.contenido {
  // height: calc(100vh - 70px);
}

.line-grey {
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
