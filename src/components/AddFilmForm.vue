<template>
  <div class="add-film-form">
    <h2>Add New Film</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="form.image" required />
      </div>
      <div>
        <label for="year">Year:</label>
        <input type="text" id="year" v-model="form.year" required />
      </div>
      <button type="submit">Add Film</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddFilmForm',
  data() {
    return {
      form: {
        name: '',
        image: '',
        year: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add-film', { ...this.form, id: Date.now().toString() });
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.add-film-form {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-film-form h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.add-film-form div {
  margin-bottom: 1rem;
}

.add-film-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.add-film-form input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

.add-film-form button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-film-form button:hover {
  background-color: #0056b3;
}
</style>
