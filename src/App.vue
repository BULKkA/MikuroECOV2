<template>
  <main class="app">
    <h1>Добро пожаловать в MikuroECOV2 Vue</h1>
    <p>Локальная картинка из `src/assets`:</p>
    <img src="./assets/local-image.svg" alt="Локальная картинка" />
  </main>
</template>

<script setup>
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}
img {
  max-width: 300px;
  border: 2px solid #0066cc;
  border-radius: 8px;
}
</style>
