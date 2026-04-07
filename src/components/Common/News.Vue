<template>
    <div class="news-panel">
        <div class="news-header">
            <h2>News</h2>
        </div>
        <div class="news-list">
            <div v-if="newsList.length === 0" class="empty-state">
                <p>No news available</p>
            </div>
            <div v-for="item in newsList" :key="item.id" class="news-item">
                <div class="news-date">{{ formatDate(item.date) }}</div>
                <div class="news-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            newsList: []
        }
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    }
}
</script>

<style scoped>
.news-panel {
    padding: 16px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
}

.news-header h2 {
    margin: 0 0 16px 0;
    font-size: 18px;
}

.news-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.news-item {
    padding: 12px;
    border-left: 4px solid #1976d2;
    background: #f5f5f5;
    border-radius: 2px;
}

.news-date {
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
}

.news-content h3 {
    margin: 0 0 4px 0;
    font-size: 14px;
}

.news-content p {
    margin: 0;
    font-size: 13px;
    color: #555;
}

.empty-state {
    padding: 32px;
    text-align: center;
    color: #999;
}
</style>