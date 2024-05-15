<template>
  <main>
    <SectionLayout>
      <EditForm :user="user" />
    </SectionLayout>
  </main>
</template>

<script>
    import SectionLayout from '@/layouts/SectionLayout.vue'
    import CrudFilmsRow from '@/components/CrudFilmsRow.vue'
</script>
