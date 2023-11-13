import { gsap } from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap)
})
