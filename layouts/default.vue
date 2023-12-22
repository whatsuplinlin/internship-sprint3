<template>
  <div>
    <Header v-if="isDesktop" />
    <HeaderMobile v-else />
    <slot></slot>
    <Footer v-if="isDesktop" />
    <FooterMobile v-else />
  </div>
</template>

<script setup>
const isDesktop = ref(false);
const isMobile = ref(false);

const updateWindowSize = () => {
  const screenWidth = window.innerWidth;
  isDesktop.value = screenWidth > 1279;
  isMobile.value = screenWidth <= 767;
};

onMounted(() => {
  if (process.client) {
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
  }
});

// const isDesktop = ref(window.innerWidth > 900)

// onMounted(() => {
//   window.addEventListener('resize', updateWindowSize)
// })

// const updateWindowSize = () => {
//   isDesktop.value = window.innerWidth > 900
// }
</script>

<style>
@import "@/style/global.scss";
</style>