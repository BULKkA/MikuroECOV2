<template>
    <section class="post-feed">
        <div v-if="posts.length === 0" class="empty-state">
            Нет постов для отображения
        </div>

        <div v-else class="post-list">
            <article v-for="post in posts" :key="post.id" class="post-card">
                <div class="post-header">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <span class="post-date">{{ post.date }}</span>
                </div>
                <p class="post-excerpt">{{ post.excerpt }}</p>
                <div class="post-meta">
                    <span>Автор: {{ post.author }}</span>
                    <span>Теги: {{ post.tags.join(', ') }}</span>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
    {
        id: 1,
        title: 'Как сделать Vue компонент',
        author: 'Сергей',
        date: '2026-04-08',
        excerpt: 'Краткое руководство по созданию простого компонента Vue и выводу данных в шаблоне.',
        tags: ['Vue', 'JavaScript', 'Frontend'],
    },
    {
        id: 2,
        title: 'Работа с реактивными данными',
        author: 'Анна',
        date: '2026-04-07',
        excerpt: 'Объяснение основ реактивности в Vue и как обновления открываются автоматически.',
        tags: ['Reactivity', 'Vue 3', 'Composition API'],
    },
    {
        id: 3,
        title: 'Создание адаптивной ленты',
        author: 'Игорь',
        date: '2026-04-06',
        excerpt: 'Пример оформления постов и адаптации интерфейса под мобильные устройства.',
        tags: ['CSS', 'Responsive', 'UI'],
    },
])
</script>

<style scoped>
.post-feed {
    max-width: 900px;
    margin: 0 auto;
    padding: 24px;
    font-family: Inter, sans-serif;
    color: #1f2937;
}

.feed-title {
    margin-bottom: 18px;
    font-size: 28px;
    font-weight: 700;
}

.empty-state {
    padding: 32px;
    text-align: center;
    color: #6b7280;
    background: #f3f4f6;
    border-radius: 12px;
}

.post-list {
    display: grid;
    gap: 16px;
}

.post-card {
    padding: 20px;
    border-radius: 14px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06);
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.post-title {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
}

.post-date {
    color: #6b7280;
    font-size: 14px;
}

.post-excerpt {
    margin: 0 0 14px;
    color: #374151;
    line-height: 1.6;
}

.post-meta {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    color: #4b5563;
    font-size: 14px;
}
</style>