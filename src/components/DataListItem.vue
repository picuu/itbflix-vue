<script>
export default {
  name: 'DataListItem',
  props: {
    term: String,
    description: String
  }
}
</script>

<template>
  <div>
    <dt>{{ term }}</dt>
    <dd>{{ description }}</dd>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 1.5rem;
}

dt {
  width: 65px;
  font-weight: 700;
  color: var(--color-text-bright);
}

dd {
  width: 90%;
  color: var(--color-text-bright);
}
</style>
