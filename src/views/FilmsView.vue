<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import FilmsRow from '@/components/FilmsRow.vue'
</script>

<template>
  <main>
    <SectionLayout title="Films">
      <FilmsRow search="batman" type="movie" />
    </SectionLayout>
  </main>
</template>
