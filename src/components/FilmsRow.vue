<script>
import FilmCard from '@/components/FilmCard.vue'

import JokerPoster from '@/assets/img/joker.webp'
import SpidermanPoster from '@/assets/img/spiderman.jpg'
import NovedadFrentePoster from '@/assets/img/sin-novedad-en-el-frente.jpg'
import LoboWallStreetPoster from '@/assets/img/lobo-wall-street.jpg'
import ItPoster from '@/assets/img/it.jpg'

export default {
  name: 'FilmsRow',
  components: {
    FilmCard
  },
  data() {
    return {
      films: [
        {
          name: 'The Joker',
          image: JokerPoster
        },
        {
          name: 'SpiderMan: No Way Home',
          image: SpidermanPoster
        },
        {
          name: 'Sin novedad en el frente',
          image: NovedadFrentePoster
        },
        {
          name: 'The Wolf of Wall Street',
          image: LoboWallStreetPoster
        },
        {
          name: 'IT',
          image: ItPoster
        }
      ]
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
