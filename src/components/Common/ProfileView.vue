<template>
  <div class="profile-view">
    <h1>{{ t('profile.title') }}</h1>
    <p>{{ t('profile.subtitle') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>