<script>
export default {
  name: 'FilmCard',
  props: {
    image: String,
    name: String
  }
}
</script>

<template>
  <article>
    <img :src="image" :alt="name" :title="name" />
  </article>
</template>

<style scoped>
article {
  box-shadow: 0 60px 60px -60px #ffffff40;
  transition: transform 0.2s ease-in-out;
}

article:hover {
  transform: translateY(-0.5rem);
  cursor: pointer;
}

img {
  border-radius: 0.75rem;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
