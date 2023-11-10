import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap)
})