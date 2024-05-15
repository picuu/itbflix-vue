<template>
  <div class="edit-form">
    <h2>Edit User</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="form.confirmPassword" />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    user: Object
  },
  data() {
    return {
      form: { ...this.user }
    }
  },
  methods: {
    handleSubmit() {
      if (this.form.password !== this.form.confirmPassword) {
        alert('Contraseñas no coinciden');
        return;
      }
      console.log('Form updated:', this.form);
      this.$router.push('/'); 
    }
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-form h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.edit-form div {
  margin-bottom: 1rem;
}

.edit-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.edit-form input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

.edit-form button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #0056b3;
}
</style>
