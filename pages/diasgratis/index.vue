<template>
  <!-- Inscripcion -->
  <div>
    <div class="bg-custom-black-fivo"></div>
    <div class="w-full">
      <div class="absolute bg-blue-custom w-100 inset-x-0">
        <div
          class="mx-4 sm:mx-20 md:mx-24 lg:mx-32 lg:px-6 contenido flex flex-wrap items-center content-start sm:content-center"
        >
          <div class="flex flex-wrap w-full">
            <!-- 1 -->
            <div class="w-full md:w-1/2 px-2">
              <div class="h-full relative mr-1">
                <div class="py-2 md:py-4 title text-white text-3xl">Vive una Experiencia Fivo</div>
                <div class="relative line-grey"></div>
                <div class="flex flex-wrap items-end">
                  <div class="w-full py-4 subtitle text-white text-xs">
                    Queremos invitarte a que disfrutes 3 dias muy saludables y compruebes todo lo que te
                    podemos ofrecer para verte y sentirte mejor.
                    Conseguir tu pase de cortesia es muy sencillo. Completa el formluario.
                  </div>

                  <div class="block md:absolute bottom-0">
                    <router-link
                      tag="a"
                      to="/planes"
                      class="w-full btn btn-border-white py-4 rounded text-sm"
                    >Ver planes de afiliación</router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div class="w-full md:w-1/2 px-2 md:px-2 lg:px-4 xl:px-10 mb-4 md:mb-0">
              <div class="w-full mt-4 md:mt-0">
                <div class="py-2 md:py-4 title text-white text-3xl">Ingresa tus datos</div>
                <div class="line-grey w-full relative"></div>
              </div>
              <div class="w-full mt-4">
                <div class="w-full flex flex-wrap mb-2">
                  <!-- Nombre -->
                  <div class="w-full sm:w-1/2 mb-2 pr-1">
                    <div class="w-full wrapper-input mb-0 md:mb-1">
                      <input
                        type="text"
                        name="nombre"
                        v-model="form.nombre"
                        placeholder="Nombre"
                      />
                    </div>
                    <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('nombre') }}</div> -->
                  </div>
                  <!-- Apellido -->
                  <div class="w-full sm:w-1/2 mb-2 pr-1">
                    <div class="w-full wrapper-input mb-0 md:mb-1">
                      <input
                        type="text"
                        name="apellido"
                        v-model="form.apellido"
                        placeholder="Apellido"
                      />
                    </div>
                    <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('apellido') }}</div> -->
                  </div>
                </div>

                <!-- <div class="w-full flex flex-wrap mb-2"> -->
                <!-- Email -->
                <div class="w-full mb-2 pr-1">
                  <div class="wrapper-input mb-4">
                    <input
                      type="email"
                      name="email"
                      v-model="form.correo"
                      placeholder="Email"
                    />
                  </div>
                  <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('email') }}</div> -->
                </div>
                <!-- </div> -->

                <div class="w-full flex flex-wrap mb-2">
                  <!-- Dni -->
                  <div class="w-full sm:w-1/2 mb-2 pr-1">
                    <div class="wrapper-input mb-4">
                      <input
                        type="text"
                        name="dni"
                        v-model="form.dni"
                        placeholder="N° de Documento"
                      />
                    </div>
                    <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('dni') }}</div> -->
                  </div>
                  <!-- Fecha de nacimiento -->
                  <div class="w-full sm:w-1/2 mb-2">
                    <!-- <label class="w-full text-sm label">Fecha de nacimiento</label> -->
                    <div class="wrapper-input mb-4">
                      <input
                        type="text"
                        v-model="form.fechaNacimiento"
                        placeholder="Fecha de Nacimiento"
                      />
                    </div>
                    <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('fechaNacimiento') }}</div> -->
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
                    <!-- <div class="w-full mb-1 text-xs text-red-500">{{ errors.first('direccion') }}</div> -->
                  </div>
                  <!-- Telefono -->
                  <div class="w-full sm:w-1/2 mb-2 pr-1">
                    <div class="wrapper-input">
                      <input type="text" name="telefono" v-model="form.telefono" placeholder="Número de Teléfono"/>
                    </div>
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
              </div>
              <!-- Continuar -->
              <div class="mt-6 w-full flex flex-wrap items-start justify-between">
                <div class="w-full md:w-2/5">
                  <button
                    class="btn btn-yellow px-8 py-4 rounded text-sm ld-ext-right"
                    :class="{'running': loading}"
                    @click="solicitar">
                    <span>  Enviar </span>
                    <div style="color:#fff" class="ld ld-ring ld-spin"></div>
                  </button>
                </div>
                <div class="w-full md:w-3/5 mt-4 md:mt-0">
                  <div class="w-full text-sm">
                    <span class="text-white">Al finalizar aceptas nuestros</span>
                    <a download="" class="text-yellow no-underline hover:underline" href="/pdf/tyc.pdf">términos y condiciones </a>
                    <span class="text-white">y nuestras</span>
                    <a class="text-yellow">políticas de tratamiento de datos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <prueba-gratis-success v-if="success"></prueba-gratis-success>


    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import PruebaGratisSuccess from '~/pages/diasgratis/success.vue';
export default {
  data() {
    return {
      success: false,
      loading: false,
      form: {
        nombre: "",
        apellido: "",
        correo: "",
        dni: "",
        fechaNacimiento: "",
        sexo: "",
        direccion: "",
        telefono: "",
        noticias: false
      }
    };
  },
  components: {
    PruebaGratisSuccess
  },
  methods: {
    solicitar() {
      this.success = true;
      // this.$validator.validateAll().then(result => {
      //   if (result) {
      //     this.loading = true;
      //     let data = Object.assign( { persona: this.form } );
      //     axios.post('/api/diasgratis', data).then(res => {
      //       this.loading = false;
      //       this.success = true;
      //     },
      //     error => {
      //       this.loading = false;
      //     });
      //   }
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
.contenido {
  // height: calc(100vh - 70px);
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
</style>
