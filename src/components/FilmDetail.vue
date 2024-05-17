<script>
import DataListItem from './DataListItem.vue'
import { getFilm } from '@/services/getFilm.js'

export default {
  name: 'FilmDetail',
  props: { id: String },
  components: { DataListItem },
  methods: {
    getFilm
  },
  data() {
    return {
      film: Object
    }
  },
  async mounted() {
    this.film = await this.getFilm(this.id)
    console.log(this.film)
  }
}
</script>

<template>
  <h1>{{ film.Title }}</h1>

  <div class="main-content">
    <div class="first-content">
      <section class="trailer-section">
        <h2>Poster</h2>
        <img :src="film.Poster" :alt="film.Title" width="560" />
      </section>
    </div>

    <div class="info-section">
      <section>
        <h2>Main information</h2>
        <dl class="info">
          <DataListItem term="Title" :description="film.Title" />
          <DataListItem term="Year" :description="film.Year" />
          <DataListItem term="Runtime" :description="film.Runtime" />
          <DataListItem term="Director" :description="film.Director" />
          <DataListItem term="Writer" :description="film.Writer" />
          <DataListItem term="Genre" :description="film.Genre" />
          <DataListItem term="Rated" :description="film.Rated" />
          <DataListItem term="Actors" :description="film.Actors" />
        </dl>
      </section>

      <section class="sinopsis-section">
        <h2>Sinopsis</h2>
        <div class="section-content">
          <p>{{ film.Plot }}</p>
        </div>
      </section>

      <section>
        <h2>Rating</h2>
        <div class="section-content">
          <dl class="info">
            <template v-for="(film, index) in film.Ratings" :key="index">
              <DataListItem :term="film.Source" :description="film.Value" />
            </template>
          </dl>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  border-radius: 0.5rem;
}

h1 {
  font-size: 3rem;
  padding-top: var(--body-margin);
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.5rem 0 1rem 0;
}

.main-content {
  display: flex;
  gap: var(--section-gap);
}

.sinopsis-section p {
  font-size: 1.1rem;
  line-height: 1.4rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.first-content,
.info-section {
  width: 50%;
}

@media (width < 800px) {
  .main-content {
    flex-direction: column;
    gap: 2rem;
  }

  .first-content,
  .info-section {
    width: initial;
  }
}
</style>
