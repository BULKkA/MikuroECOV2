<template>
  <div class="login-view">
    <h1>{{ t('login.title') }}</h1>
    <p>{{ t('login.subtitle') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>