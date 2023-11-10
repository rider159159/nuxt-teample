<script setup>
const { $gsap, $d3 } = useNuxtApp()

onMounted(() => {
  $gsap.to('#text', {
    x: -1000,
    duration: 5,
    repeat: -1,
    ease: 'none',
  })
});

</script>

<template>
  <div class="m-[50px] overflow-hidden">
    <p id="text" class="whitespace-nowrap">
      這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例
    </p>
  </div>
</template>

<style scoped>

</style>