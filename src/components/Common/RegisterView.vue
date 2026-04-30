<template>
  <div class="register-view">
    <h1>{{ t('register.title') }}</h1>
    <p>{{ t('register.subtitle') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>