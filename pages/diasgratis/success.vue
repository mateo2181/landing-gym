<template>
  <!-- Inscripcion -->
  <div>
    <div class="fixed h-100 w-100 inset-0">
      <div class="contenido overflow-hidden relative bg-success flex flex-wrap items-center justify-center content-center">
        <div class="block w-auto mx-auto max-w-sm">
          <!-- TEXTO -->
            <div class="w-full text-center">
              <div class="w-full mb-2 md:mb-4 relative">
                <div class="my-2 title text-white text-2xl sm:text-4xl">¡Felicitaciones!</div>
                <!-- <div class="mt-2 mb-4 title text-white text-lg sm:text-xl">Tu prueba se ha realizado con éxito</div> -->
              </div>
              <div class="w-full mt-2 sm:mt-6 text-white text-sm leading-normal">
                  Ya formas parte de Fivo.
                  Recibirás un email con la información necesaria para que 
                  empieces a disfrutar esta experiencia cuanto antes.
              </div>
            </div>

        </div>
          <!-- Imagenes -->
          <div class="image1 absolute top-0 left-0"> 
            <img class="w-3/5" src="img/success/img1.png" alt="Imagen Compra 1">
          </div>
          <div class="image2 absolute top-0 right-0"> 
            <img class="w-3/5" src="img/success/img2.png" alt="Imagen Compra 2">
          </div>
          <div class="image3 absolute bottom-0 left-0"> 
            <img class="w-3/5" src="img/success/img3.png" alt="Imagen Compra 3">
          </div>
          <div class="image4 absolute bottom-0 right-0"> 
            <img class="w-3/5" src="img/success/img4.png" alt="Imagen Compra 4">
          </div>

        <!-- BOTON -->
        <div style="bottom: 5%;" class="absolute mx-auto w-auto text-center">
          <router-link to="/" tag="a" class="mb-4 btn btn-yellow-degree py-4 px-10 rounded text-sm"> Continuar </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import jsPDF from 'jsPDF'
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
      ...mapState(["plan","datosPago","costoTarjeta","datosPersonales"]),
      ...mapGetters(["subtotal",'tax','total'])
  },
  methods: {
    descargarPdf(img) {
        // let pdfName = 'Resumen-Suscripcion-FIVO'; 
        // var doc = new jsPDF();
        
        // var width = doc.internal.pageSize.width;
        // doc.addImage( img,"png",(width/3)+15,10,50,20,"FIVO");

        // doc.text(`Gracias ${this.datosPersonales.nombre} ${this.datosPersonales.apellido}  por utilizar FIVO!`, 10, 40);
        
        // doc.text('Ya formas parte de Fivo Gimnasio 24 horas, en las próximas semanas',10,60);
        // doc.text('recibirás un correo con toda la información de nuestra inauguración',10,65);

        // doc.text('Plan elegido',10,80);
        // doc.text(`${this.plan.nombre}`,10,90);

        // let pagoUnico = this.plan.pagoUnico ? this.plan.pagoUnico : 0; 
        // doc.text('Cuota de inscripción',10,110);
        // doc.text(`${pagoUnico}`,10,120);

        // doc.text('Cobro tarjeta',10,140);
        // doc.text(`${this.costoTarjeta}`,10,150);

        // let costoMensual = this.plan.pagoMensual ? this.plan.pagoMensual : 0; 
        // doc.text('Costo mensual',10,170);
        // doc.text(`${costoMensual}`,10,180);

        // doc.setFontSize(12);
        // doc.text(`${new Date()}`,10,200);
        
        // doc.save(pdfName + '.pdf');
    },
    getImageFromUrl() {
      let url = "img/fivopdf.png";
      let _this = this;
      var img = new Image();
      img.onError = function() {
        alert('Cannot load image: "' + url + '"');
      };
      img.onload = function() {
        // _this.descargarPdf(img);
      };
      img.src = url;
    }
  }
};
</script>
<style lang="scss" scoped>
.contenido {
  // // height: calc(100vh - 70px);
  height: calc(100vh - 64px);
  margin-top: 64px;
  z-index: 60;
}
.bg-success {
  background: rgba(11, 22, 39, 0.8);
}

.image1 {
    transform: translateX(-8%);
}

.image2 {
    transform: translateX(56%);
}

.image3 {
    transform: translate(-14%,21%);
}

.image4 {
    transform: translateX(56%);
}
</style>
