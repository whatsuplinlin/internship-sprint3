<template>
  <div id="category">
    <p>{{ category.title }}</p>
    <p>{{ category.count }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["category"]);
</script>

<style lang="scss" scoped>
#category {
  width: 250px;
  display: flex;
  justify-content: space-between;
  color: #9f9f9f;
  margin-bottom: 41px;
  & p {
    margin: 0;
  }
}
</style>