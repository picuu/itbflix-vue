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
  <article :id="id">
    <template v-if="id">
      <RouterLink :to="'/film/' + id">
        <img :src="image" :alt="name" :title="name" />
      </RouterLink>
    </template>
    <template v-else>
      <img :src="image" :alt="name" :title="name" />
    </template>
    <h3>{{ name }}</h3>
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
</style>
