<template>
  <div class="banner">
    <img src="~/assets/icon-logo.png" />
    <h1>{{ title.name }}</h1>
    <div>
      <p>Home</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
      </svg>
      <p>{{ title.name }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("~/assets/img-banner-background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 323px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 48px;
    font-weight: 500;
    margin: 0;
  }
  div {
    display: flex;
    p {
      margin: 0;
    }
    svg {
      padding: 2px 8px;
    }
    p:last-child {
      font-weight: 300;
    }
  }
}
</style>