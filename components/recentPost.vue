<template>
  <div id="recent-post">
    <img v-if="post.key === 1" src="~/assets/blog/img-blog-recentpost1.png" />
    <img v-if="post.key === 2" src="~/assets/blog/img-blog-recentpost2.png" />
    <img v-if="post.key === 3" src="~/assets/blog/img-blog-recentpost3.png" />
    <img v-if="post.key === 4" src="~/assets/blog/img-blog-recentpost4.png" />
    <img v-if="post.key === 5" src="~/assets/blog/img-blog-recentpost5.png" />
    <div id="post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.date }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["post"]);
</script>

<style lang="scss" scope>
#recent-post {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 39px;
  & h4 {
    width: 160px;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
  & p {
    color: #9f9f9f;
    font-size: 12px;
    margin: 5px 0 0;
  }
}
</style>