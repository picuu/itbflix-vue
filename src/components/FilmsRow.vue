<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
  name: 'FilmsRow',
  props: {
    search: String,
    type: String
  },
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
        const response = await fetch(`http://www.omdbapi.com/?apikey=a8eef58&s=${this.search}&type=${this.type}`)
        const data = await response.json()
        if (data.Response === 'True') {
          this.films = data.Search.map((movie) => ({
            name: movie.Title,
            image: movie.Poster !== 'N/A' ? movie.Poster : 'default-image-url.jpg',
            year: movie.Year,
            id: movie.imdbID
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
      <FilmCard :image="film.image" :name="film.name" :year="film.year" :id="film.id" />
    </template>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
}
</style>
