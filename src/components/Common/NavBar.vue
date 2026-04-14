<template>
    <nav class="nav-wrapper">
        <ul class="nav-list">
            <!-- Используем router-link для смены URL -->
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
const items = [
    { name: 'index', label: 'Домик', icon: '🏠' },
    { name: 'roll', label: 'Лента', icon: '🔍' }, 
    { name: 'profile', label: 'Профиль', icon: '❤️' },
    { name: 'about', label: 'ああああ', icon: '👤' },
]
</script>

<style scoped>
.nav-wrapper {
    display: flex;
    justify-content: left;
    padding: 14px 24px;
    border-radius: 20px;
    width: 10%;
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
    align-self: right;
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
</style>