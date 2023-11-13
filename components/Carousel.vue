<script setup>
const swiperConfig = {
  modules: [
    SwiperNavigation,
    SwiperEffectCreative,
    SwiperAutoplay
  ],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: true,
  },
  breakpoints: {
    545: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    }
  }
};
</script>

<template>
  <div>
    <Swiper v-bind="swiperConfig">
      <SwiperSlide v-for="slide in 10" :key="slide">
        <img src="~/assets/test.jpg" alt="">
        <strong>{{ slide }}</strong>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
