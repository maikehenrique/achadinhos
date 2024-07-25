import {
  extend,
  localize,
  ValidationObserver,
  // eslint-disable-next-line prettier/prettier
  ValidationProvider,
} from 'vee-validate'
// eslint-disable-next-line camelcase
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'
import {
  confirmed,
  email,
  min,
  numeric,
  required,
} from 'vee-validate/dist/rules'
import Vue from 'vue'

// Add a rule.
extend('required', required)
extend('numeric', numeric)
extend('email', email)
extend('min', min)
extend('confirmed', confirmed)
extend('not_equal', {
  params: ['target'],
  validate(value, { target }) {
    return value !== target
  },
  message: (field, { target }) => {
    return `O campo ${field} não pode ser igual a ${target}`
  },
})
extend('is_time', {
  params: ['target'],
  validate(value) {
    const regex = /([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/
    return value && regex.test(value)
  },
  message: (field) => {
    return `O horário informado é inválido`
  },
})

// Register it globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// Install pt_BR locale.
localize('pt_BR', pt_BR)
