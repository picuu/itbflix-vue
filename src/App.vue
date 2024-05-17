<script setup>
import { RouterView, RouterLink } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
import ItbflixLogo from '@/assets/img/itbflix-logo.png'
</script>

<template>
  <header>
    <img :src="ItbflixLogo" alt="ITBFlix" />

    <div class="navbar">
      <div class="menu">MENU</div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/films">Films</RouterLink>
        <RouterLink to="/shows">Shows</RouterLink>
        <RouterLink to="/crud">CRUD</RouterLink>
        <RouterLink to="/sign-up">Sign Up</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style scoped>
.navbar {
  position: relative;
}

.menu {
  display: none;
}

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
  background-color: var(--color-background-mute);
  border-radius: 0.25rem;
  color: var(--color-text);
  text-decoration: none;
  transition: 0.2s ease-in-out;
  transition-property: background-color, color;
}

a:hover,
.menu:hover {
  cursor: pointer;
  background-color: var(--color-background-soft);
  color: var(--color-text-accent);
}

@media (width < 790px) {
  .menu {
    display: block;
    padding: 0.6rem 2rem;
    background-color: var(--color-background-mute);
    color: var(--color-text);
  }

  nav {
    position: absolute;
    right: 0;
    display: none;
    flex-direction: column;
    gap: 0;
    background-color: var(--color-background-mute);
    width: 100%;
    z-index: 1;
  }

  a {
    padding: 0.25rem 0.5rem;
    background: none;
    margin-bottom: 0.25rem;
  }

  .menu:hover nav,
  .navbar:hover nav {
    display: flex;
  }
}

@media (width < 480px) {
  img {
    width: 125px;
  }
}

@media (width < 360px) {
  img {
    width: 90px;
  }

  .menu {
    padding-inline: 1.25rem;
  }
}
</style>
