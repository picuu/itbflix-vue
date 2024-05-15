<script>
export default {
  name: 'CrudCard',
  props: {
    image: String,
    name: String,
    year: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <article>
    <img :src="image" :alt="name" :title="name" />
    <h3>{{ name }}</h3>
    <template v-if="id">
      <div>
        <button :data-film-id="id">E</button>
        <button :data-film-id="id">B</button>
      </div>
    </template>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

article:hover {
  cursor: pointer;
}

article:hover img {
  transform: translateY(-0.5rem);
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
</style>
