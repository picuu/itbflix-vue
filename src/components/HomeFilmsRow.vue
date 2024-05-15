<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
  name: 'FilmsRow',
  props: {
    films: Array(Object)
  },
  components: {
    FilmCard
  }
}
</script>

<template>
  <div>
    <template v-for="(film, index) in films" :key="index">
      <FilmCard :image="film.image" :name="film.name" />
    </template>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2.5rem;
}
</style>
