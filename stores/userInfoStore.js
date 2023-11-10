import { defineStore } from 'pinia'

export const userInfoStore = defineStore('user-info-store', () => {
  const SHOW_LOGIN_MODAL = ref(false) // for permission and header use
  const TO_ROUTE = ref('/') // login redirect
  const USER_INFO_REF = ref({})

  return {
    SHOW_LOGIN_MODAL,
    TO_ROUTE,
    USER_INFO_REF
  }
})
