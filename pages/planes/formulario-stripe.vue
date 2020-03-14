<template>
<div>
    <form id="payment-form" class="w-full example example2" action="">    
        <div class="w-full">
          <!-- Titular de la Tarjeta -->
            <div class="w-full wrapper-input mb-2">
                <input class="input" type="text" name="titularTarjeta" placeholder="Titular de la tarjeta" v-model="titularTarjeta">
                <!-- <label for="titularTarjeta">Titular de la Tarjeta</label> -->
                <!-- <small class="text-red-500">{{ errors.first('titularTarjeta') }}</small> -->
            </div>
            <!-- Número de Tarjeta -->
            <div class="w-full mb-2">
              <div class="wrapper-input">
                <div id="example2-card-number" class="input"></div>
                <!-- <label for="example2-card-number" data-tid="elements_examples.form.card_number_label">Número de Tarjeta</label> -->
                <!-- <div class="baseline"></div> -->
              </div>
            </div>
            <!-- Fecha de Caducidad - Código CVC -->
            <div class="w-full mb-2">
                <div class="wrapper-input">
                <div id="example2-card-expiry" placeholder="Expiración" class="input"></div>
                <!-- <label for="example2-card-expiry" data-tid="elements_examples.form.card_expiry_label">Fecha Expiración</label> -->
                <!-- <div class="baseline"></div> -->
              </div>
            </div>
            <div class="w-full mb-2">
              <div class="wrapper-input">
                <div id="example2-card-cvc" placeholder="CVC" class="input"></div>
                <!-- <label for="example2-card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label> -->
                <div class="baseline"></div>
              </div>
            </div>
            
            <div id="card-errors" class="hidden text-grey-light mt-2" role="alert"></div>
            </div>
            <div v-if="error" class="mt-2 w-full text-lg text-red">
              {{ error }}
            </div>

    </form>
</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      stripe: null,
      titularTarjeta: "",
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      error: null
    };
  },
  props: {
    checkPay: {
      type: Boolean,
      required: true
    },
    keystripe: {
      type: String,
      required: true
    }
  },
  watch: {
    checkPay: function(newVal, oldVal) {
      // watch it
      console.log("Prop changed!");
      this.callApiStripe();
    }
  },
  mounted() {
    var elementClasses = {
      focus: "focused",
      empty: "empty",
      invalid: "invalid"
    };

    var elementStyles = {
      base: {
        color: "#606f7b",
        fontFamily: "Roboto, sans-serif",
        "::placeholder": {
          color: "#606f7b"
        },
        ":-webkit-autofill": {
          color: "transparent"
        }
      },
      invalid: {
        color: "#E25950",

        "::placeholder": {
          color: "#FFCCA5"
        }
      }
    };

    this.stripe = Stripe(this.keystripe);
    var elements = this.stripe.elements({ locale: 'es' });
    this.cardNumber = elements.create("cardNumber", {
      style: elementStyles,
      classes: elementClasses
    });
    // this.cardNumber.mount("#cardNumber");
    this.cardNumber.mount('#example2-card-number');
    this.cardExpiry = elements.create("cardExpiry", {
      style: elementStyles,
      classes: elementClasses
    });
    this.cardExpiry.mount("#example2-card-expiry");
    this.cardCvc = elements.create("cardCvc", {
      style: elementStyles,
      classes: elementClasses
    });
    this.cardCvc.mount("#example2-card-cvc");

    // this.cardCvc.addEventListener('change', function(event) {
    //   const cvcField = document.querySelector("#example2-card-cvc iframe").contentDocument.querySelector("input[name='cvc']");
    //   cvcField.setAttribute('type','password');

    // });

  },
  methods: {
    ...mapActions(["set_token_stripe"]),
    callApiStripe() {
      const vm = this;
      var form = document.getElementById("payment-form");
      this.stripe.createPaymentMethod('card',this.cardNumber).then(function(result) {
        console.log(result);
        if (result.error) {
          // console.log(result.error);
          // Inform the customer that there was an error.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
          vm.error = 'Hubo un error con los datos ingresados, por favor intente nuevamente';
          vm.$emit("pay",false);
        } else {
          // Send the token to your server.
          vm.error = null;
          vm.stripeResponseHandler(result.paymentMethod);
        }
      }, error => {
        vm.error = 'Hubo un error con los datos ingresados, por favor intente nuevamente';
        vm.$emit("pay",false);
      });
      // this.$emit("pay",false);
      // Stripe.card.createToken(form, stripeResponseHandler);
    },
    stripeResponseHandler(token) {
      this.set_token_stripe(token);
      this.$emit("pay",true);
    }
  }
};
</script>

<style scoped>

.StripeElement {
  background-color: transparent;
  color: #606f7b;
  padding: .25rem .5rem;
  width: 100%;
  /* height: 40px; */
  /* border-radius: 4px; */
}

.StripeElement--focus {
  /* box-shadow: 0 1px 3px 0 #cfd7df; */
}

.StripeElement--invalid {
  border-color: #fa755a;
}

</style>
