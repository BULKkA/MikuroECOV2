<template>
  <div class="post-detail-view">
    <h1>{{ t('postDetail.title') }}</h1>
    <p v-if="id">{{ idMessage }}</p>
    <p v-else>{{ t('postDetail.notFound') }}</p>
    <p>{{ t('postDetail.description') }}</p>
  </div>
</template>

<script setup>
import { defineProps, inject, computed } from 'vue';

const t = inject('t')
const props = defineProps({
  id: { type: String, required: true }
});

const idMessage = computed(() => `${t('postDetail.idLabel')}: ${props.id}`)
</script>