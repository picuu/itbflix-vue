<script>
import SectionLayout from '@/layouts/SectionLayout.vue'
import FilmDetail from '@/components/FilmDetail.vue'

export default {
  name: 'FilmDetailView',
  props: {
    id: String
  },
  components: { SectionLayout, FilmDetail }
}
</script>

<template>
  <main>
    <SectionLayout title="Film Detail">
      <FilmDetail :id="id" />
    </SectionLayout>
  </main>
</template>
