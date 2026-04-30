<template>
  <div class="home-view">
    <h1>{{ t('index.title') }}</h1>
    <p class="description">{{ t('index.description') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>

<style scoped>
.home-view { padding: 40px; text-align: center; color: #1f2937; }
.description { font-size: 1.1rem; color: #4b5563; margin-top: 20px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6; }
</style>