<template>
  <div class="post-detail-view">
    <h1>Детали поста</h1>
    <p v-if="id">Просмотр поста с ID: {{ id }}</p>
    <p v-else>Пост не найден.</p>
    <p>Здесь будет отображаться полный текст поста, медиа и комментарии.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: { type: String, required: true } // Route param 'id' passed as prop
});
</script>