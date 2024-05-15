<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import CrudFilmsRow from '@/components/CrudFilmsRow.vue'
</script>

<template>
  <main>
    <SectionLayout title="Films CRUD">
      <CrudFilmsRow search="comedy" type="movie" />
    </SectionLayout>
  </main>
</template>
