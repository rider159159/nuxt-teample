export default defineNuxtRouteMiddleware(async (to, from) => {
  const  cookie = useCookie('wowcho')
  const USER_STORE = userInfoStore()
  const LOGIN_STORE = userLoginStore()

  if (cookie.value) {

    const res = await $fetch("/profile",{
      baseURL: config.public.BASE_API_URL,
      method:'GET',
      headers:{
        Authorization:`Bearer ${cookie.value}`
      },
    })

    if (res.status !== 'Success') {
      USER_STORE.FN_LOGOUT()
      LOGIN_STORE.SHOW_LOGIN_MODAL = true
      return false
    }
    USER_STORE.USER_INFO_REF = res.data
    return true
  } else {
    if (to.meta.requiresAuth) {
      LOGIN_STORE.TO_ROUTE = to.fullPath
      LOGIN_STORE.SHOW_LOGIN_MODAL = true
      if (from.name === undefined) {
        router.push('/')
      }
      return false
    } else {
      return true
    }
  }
})
