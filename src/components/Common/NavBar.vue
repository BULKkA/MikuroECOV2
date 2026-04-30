<template>
    <nav class="nav-wrapper">
        <ul class="nav-list">
            <router-link
                v-for="item in items"
                :key="item.name"
                :to="{ name: item.name }"
                custom
                v-slot="{ navigate, isActive }"
            >
                <li
                    :class="['nav-item', { active: isActive }]"
                    @click="navigate"
                >
                    <span class="nav-icon">{{ item.icon }}</span>
                    <span class="nav-text">{{ item.label }}</span>
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script setup>
import { computed, inject } from 'vue'

const t = inject('t')

const items = computed(() => [
    { name: 'index', label: t('nav.home'), icon: '🏠' },
    { name: 'roll', label: t('nav.feed'), icon: '🔍' },
    { name: 'profile', label: t('nav.profile'), icon: '❤️' },
    { name: 'about', label: t('nav.about'), icon: '👤' }
])
</script>

<style scoped>
.nav-wrapper {
    display: flex;
    justify-content: left;
    padding: 14px 24px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
}

.nav-list {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
}

.nav-item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    border-radius: 999px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.nav-item:hover {
    transform: translateY(-2px);
    background: rgba(148, 163, 184, 0.12);
}

.nav-item.active {
    background: rgba(59, 130, 246, 0.18);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.18);
}

.nav-icon {
    font-size: 1.1rem;
}

.nav-text {
    font-size: 0.95rem;
    font-weight: 600;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
    .nav-wrapper {
        width: 100%;
        height: auto;
        padding: 10px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid #ddd;
        z-index: 1000;
    }
    
    .nav-list {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        gap: 0;
    }
    
    .nav-item {
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 8px;
        flex: 1;
        justify-content: center;
    }
    
    .nav-text {
        font-size: 0.75rem;
    }
    
    .nav-icon {
        font-size: 1.2rem;
    }
}
</style>