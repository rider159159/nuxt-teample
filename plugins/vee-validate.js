import { Field, Form, ErrorMessage, configure, defineRule } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import ZhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import {
  email, required, min, max
} from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

defineRule('password', (value) => {
  if (required(value) &&
    min(value, { length: 8 }) &&
    max(value, { length: 20 })
  ) {
    return true
  }
  return '密碼必須在 8 至 20 碼之間'
})

configure({
  generateMessage: localize({
    ZhTW
  })
})
setLocale('ZhTW')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VField', Field)
  nuxtApp.vueApp.component('VForm', Form)
  nuxtApp.vueApp.component('ErrorMessage', ErrorMessage)
});
