<template>
  <div class="admin-view">
    <h1>{{ t('admin.title') }}</h1>
    <p>{{ t('admin.subtitle') }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>