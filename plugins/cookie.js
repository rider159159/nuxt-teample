import Cookies from 'js-cookie'
const TokenKey = 'wowcho'
const inSevenDays = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      GET_TOKEN: () => Cookies.get(TokenKey),
      SET_TOKEN: (token)=>  Cookies.set(TokenKey, token, {
        expires: inSevenDays
      }),
      REMOVE_TOKEN: () => Cookies.get(TokenKey)
    },
  };
});
