<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#539CF0" :height="10" :throttle="0" ></NuxtLoadingIndicator>

    <main class="m-auto mt-18 px-3 py-6 md:w-4/5 md:max-w-324 overflow-x-auto">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
