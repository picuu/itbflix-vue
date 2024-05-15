<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import FilmsRow from '@/components/FilmsRow.vue'
</script>

<template>
  <main>
    <SectionLayout title="Shows">
      <FilmsRow search="love" type="series" />
    </SectionLayout>
  </main>
</template>
