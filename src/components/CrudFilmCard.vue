<script>
import IconEdit from './icons/IconEdit.vue'
import IconDelete from './icons/IconDelete.vue'

export default {
  name: 'CrudCard',
  props: {
    image: String,
    name: String,
    year: String,
    id: String
  },
  components: {
    IconEdit,
    IconDelete
  },
  methods: {
    deleteFilm(id) {
      const proceed = confirm('Are you shure to delete the film?')
      if (proceed) {
        const filmCard = document.querySelector(`#${id}`)
        filmCard.style.display = 'none'
      }
      console.log('delete film', id)
    },
    showEditModal() {}
  }
}
</script>

<template>
  <article :id="id">
    <RouterLink :to="'/film/' + id">
      <img :src="image" :alt="name" :title="name" />
    </RouterLink>

    <h3>{{ name }}</h3>

    <div class="buttons">
      <button :data-film-id="id" v-on:click="showEditModal(id)">
        <IconEdit size="26" />
      </button>

      <button :data-film-id="id" v-on:click="deleteFilm(id)">
        <IconDelete size="26" />
      </button>
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

article:hover img {
  transform: translateY(-0.5rem);
  cursor: pointer;
}

img {
  border-radius: 0.75rem;
  width: 100%;
  aspect-ratio: 9 / 16;
  display: block;
  object-fit: cover;
  box-shadow: 0 60px 60px -60px #ffffff40;
  transition: transform 0.2s ease-in-out;
}

h3 {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

button {
  background: none;
  border: none;
  color: var(--color-text);
}

button:hover {
  cursor: pointer;
}
</style>
