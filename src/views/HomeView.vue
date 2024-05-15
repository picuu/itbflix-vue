<script setup>
import HomeFilmRows from '@/components/HomeFilmsRow.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'

import { films } from '@/services/defaultFilms.js'
</script>

<template>
  <main>
    <SectionLayout title="Films">
      <HomeFilmRows :films="films" />
    </SectionLayout>
  </main>
</template>
