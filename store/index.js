import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex);

const createStore = () => {
    return new Vuex.Store({
        state: {
            cookies: false,
            plan: null,
            tokenStripe: null,
            costoTarjeta: 15,
            fechaComienzo: null,
            datosPersonales: {
                nombre: "",
                apellido: "",
                correo: "",
                dni: "",
                // nacDia: "",
                // nacMes: "",
                // nacAño: "",
                fechaNacimiento: "",
                sexo: "",
                direccion: "",
                telefono: "",
                noticias: false
            },
            datosPago: {
                numeroTarjeta: "",
                nombreTarjeta: "",
                expMes: '',
                expAño: '',
                csc: '',
            }
        },
        getters: {
            subtotal: state => {
                if (!state.plan) return 0;
                let cuotaMes = state.plan.pagoMensual ? state.plan.pagoMensual : 0;
                let cuotaInicial = state.plan.pagoUnico ? state.plan.pagoUnico : 0;
                return +cuotaMes + +cuotaInicial + state.costoTarjeta;
            },
            tax: state => {
                return 0;
            },
            total: (state, getters) => {
                if (!state.plan) return 0;
                let cuotaMes = state.plan.pagoMensual ? state.plan.pagoMensual : 0;
                let cuotaInicial = state.plan.pagoUnico ? state.plan.pagoUnico : 0;
                return +cuotaMes + +cuotaInicial + +getters.tax + state.costoTarjeta;
            }
        },
        mutations: {
            SET_PLAN(state, payload) {
                state.plan = payload;
            },
            SET_DATOSPERSONALES(state, payload) {
                state.datosPersonales = payload;
            },
            SET_DATOSPAGO(state, payload) {
                state.datosPago = payload;
            },
            SET_TOKEN(state, payload) {
                state.tokenStripe = payload;
            },
            SET_FECHACOMIENZO(state, payload) {
                state.fechaComienzo = payload;
            },
            SET_COOKIES(state, payload) {
                state.cookies = payload;
            },
        },
        actions: {
            set_plan({ commit }, payload) {
                commit('SET_PLAN', payload);
            },
            set_datos_personales({ commit }, payload) {
                commit('SET_DATOSPERSONALES', payload);
            },
            set_datos_pago({ commit }, payload) {
                commit('SET_DATOSPAGO', payload);
            },
            set_token_stripe({ commit }, payload) {
                commit('SET_TOKEN', payload);
            },
            set_fechacomienzo({ commit }, payload) {
                commit('SET_FECHACOMIENZO', payload)
            },
            set_cookies({ commit }, payload) {
                commit('SET_COOKIES', payload)
            }
        }
    })
}
export default createStore; 
