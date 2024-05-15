<script>
export default {
  name: 'SectionLayout',
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <section>
    <template v-if="title">
      <h2>{{ title }}</h2>
    </template>

    <slot />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: var(--section-gap);
}

h2 {
  font-size: 4.75rem;
  font-weight: 700;
}
</style>
