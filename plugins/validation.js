import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import { required, min } from "vee-validate/dist/rules";
import * as VeeValidate from "vee-validate";

Vue.use(VeeValidate, { inject: false });
Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);



extend("required", required);

extend("min", min);