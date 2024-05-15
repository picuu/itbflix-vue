<script setup>
import { RouterView, RouterLink } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
import ItbflixLogo from '@/assets/img/itbflix-logo.png'
</script>

<template>
  <header>
    <img :src="ItbflixLogo" alt="ITBFlix" />
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/films">Películas</RouterLink>
      <RouterLink to="/shows">Series</RouterLink>
      <RouterLink to="/crud">Crud</RouterLink>
      <RouterLink to="/sign-up">Registrarse</RouterLink>
    </nav>
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0 2rem 0;
}

img {
  width: 200px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

a {
  padding: 0.35rem 1rem;
  background-color: rgb(31 41 55 / 0.5);
  border-radius: 0.25rem;
  color: #eee;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  transition-property: background-color, color;
}

a:hover {
  background-color: rgb(31 41 55 / 0.8);
  color: rgb(252 165 165);
}
</style>
