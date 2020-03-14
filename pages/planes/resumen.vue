<template>
  <div class="rounded bg-blue-darker flex flex-wrap px-4 py-4 items-center">
    <div v-if="plan" class="w-full pr-4">
      <div class="flex w-full items-center">
        <div class="text-white text-xl bold pb-2"> Plan {{ plan.nombre }} </div>
        <button class="btn btn-link text-yellow ml-6" @click="$emit('paso',1)"> Cambiar</button>
      </div>
      <div class="text-white flex py-4 border-b border-white">
        <div class="pr-2">Cuota</div>
        <div v-if="!plan.pagoMensual">{{ plan.pagoUnico || 0 }} &euro;</div>
        <div v-else>{{ plan.pagoMensual || 0 }} &euro; </div>
      </div>
      <div class="text-white flex py-4 border-b border-white">
        <div class="pr-2">Primer mes (tarjeta)</div>
        <div>{{ costoTarjeta || 0 }} &euro;</div>
      </div>
      <div class="text-white flex py-4 border-b border-white">
        <div class="pr-2">Subtotal</div>
        <div>{{ subtotal }} &euro;</div>
      </div>
      <!-- IGIC -->
      <div class="text-white flex py-4 border-b border-white">
        <div class="pr-2">IGIC incluido</div>
        <div> 6,5% </div>
      </div>
      <!--Total  -->
      <div class="text-white flex py-4">
        <div class="pr-2">Total</div>
        <div>{{ total }} &euro;</div>
      </div>
        <div class="w-full text-white">
          (El pago se realiza el próximo {{ today }})
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    computed: {
    ...mapState(["plan", "costoTarjeta","datosPersonales"]),
    ...mapGetters(["subtotal",'tax','total']),
    today() {
      let date = new Date();
      let month = date.getMonth()+1 > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
      return `${date.getDate()}/${month}/${date.getFullYear()}`;
    }
  }
};
</script>

<style>
</style>
