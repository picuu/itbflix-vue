<script>
import FilmCard from '@/common/FilmCard.vue'

export default {
  name: 'FilmsRow',
  components: {
    FilmCard
  },
  data() {
    return {
      films: []
    }
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=a8eef58&s=batman&type=movie')
        const data = await response.json()
        if (data.Response === 'True') {
          this.films = data.Search.map((movie) => ({
            name: movie.Title,
            image: movie.Poster !== 'N/A' ? movie.Poster : 'default-image-url.jpg'
          }))
        } else {
          console.error('Error fetching movies:', data.Error)
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
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
