<script>
import ItbflixLogo from '@/assets/img/itbflix-logo.png'

export default {
  name: 'FooterComponent',
  data() {
    return {
      ItbflixLogo: ItbflixLogo
    }
  }
}
</script>

<template>
  <footer>
    <div>
      <small>World best streaming platform</small>
      <nav>
        <a href="#">Our Company</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
      </nav>
    </div>
    <img :src="ItbflixLogo" alt="ITBFlix" />
    <div>
      <small>Copyright©️ ITBFlix 2024 - All rights reserved</small>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 1.5rem 1.5rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}

img {
  width: 100px;
  justify-self: center;
}

nav {
  display: flex;
  gap: 0.5rem;
}

a {
  color: var(--color-text-accent);
}

div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

div:last-of-type {
  justify-self: end;
}

@media (width < 600px) {
  footer {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    text-align: center;
  }
}
</style>
