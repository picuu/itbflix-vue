<template>
  <main>
    <SectionLayout>
      <AddFilmForm @add-film="handleAddFilm" />
    </SectionLayout>
  </main>
</template>

<script>
import SectionLayout from '@/layouts/SectionLayout.vue'
import AddFilmForm from '@/components/AddFilmForm.vue'

export default {
  name: 'AddFilmView',
  components: {
    SectionLayout,
    AddFilmForm
  },
  methods: {
    handleAddFilm(film) {
      this.$emit('add-film', film);
    }
  }
}
</script>

