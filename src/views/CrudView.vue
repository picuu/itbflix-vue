<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import CrudFilmsRow from '@/components/CrudFilmsRow.vue'

</script>

<template>
  <main>
    <SectionLayout title="Films CRUD">
      <div class="add-button-container">
        <button @click="goToAddFilm">Add New Film</button>
      </div>
      <CrudFilmsRow search="comedy" type="movie" />
    </SectionLayout>
  </main>
</template>

<script>
import SectionLayout from '@/layouts/SectionLayout.vue'

export default {
  name: 'HomeView',
  components: {
    SectionLayout
  },
  methods: {
    goToAddFilm() {
      this.$router.push({ name: 'AddFilm' });
    },
    editUser(email) {
      this.$router.push({ name: 'Edit', params: { email } });
    }
  }
}
</script>

<style scoped>
.add-button-container {
  margin-bottom: 1rem;
}

.add-button-container button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button-container button:hover {
  background-color: #218838;
}
</style>

