<template>
  <div class="film-card">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
    <p><strong>Year:</strong> {{ year }}</p>
    <p><strong>Type:</strong> {{ type }}</p>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    name: String,
    image: String,
    year: String,
    type: String,
    imdbID: String
  }
}
</script>

<style scoped>
.film-card {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
.film-card img {
  max-width: 100%;
  height: auto;
}
</style>
