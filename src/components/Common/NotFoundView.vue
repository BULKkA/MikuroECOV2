<template>
  <div class="not-found-view">
    <h1>{{ t('notFound.title') }}</h1>
    <p>{{ t('notFound.subtitle') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>