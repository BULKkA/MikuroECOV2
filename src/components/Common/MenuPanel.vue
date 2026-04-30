<template>
    <div class="menu-panel">
        <nav class="menu-nav">
            <img src="/Icon.png" alt="Logo" class="menu-logo" />
            <div class="menu-actions">
                <ul class="menu-list">
                    <!-- Login and Register hidden until implemented -->
                </ul>
                <div class="lang-switcher">
                    <button
                        :class="{ active: lang === 'ru' }"
                        @click="setLang('ru')"
                    >
                        {{ t('languages.ru') }}
                    </button>
                    <button
                        :class="{ active: lang === 'en' }"
                        @click="setLang('en')"
                    >
                        {{ t('languages.en') }}
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const t = inject('t')
const lang = inject('lang')
const setLang = inject('setLang')
</script>

<style scoped>
.menu-panel {
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

.menu-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 1rem;
}

.menu-logo {
    width: 80px;
    height: auto;
    margin-right: 1rem;
    flex-shrink: 0;
}

.menu-actions {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    justify-content: flex-end;
}

.menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.menu-item {
    margin: 0;
}

.menu-link {
    display: block;
    padding: 10px 16px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s;
    border-radius: 14px;
    font-size: 0.95rem;
}

.menu-link:hover {
    background-color: #f2f2f2;
}

.lang-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.lang-switcher button {
    border: 1px solid #ccc;
    background: white;
    color: #333;
    padding: 8px 12px;
    border-radius: 999px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.lang-switcher button.active,
.lang-switcher button:hover {
    background-color: #2563eb;
    border-color: #2563eb;
    color: white;
}

@media (max-width: 768px) {
    .menu-nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.75rem;
    }
    
    .menu-logo {
        width: 60px;
        margin-right: 0.5rem;
    }
    
    .menu-actions {
        justify-content: flex-end;
        gap: 0.75rem;
    }
    
    .menu-list {
        display: none;
    }
    
    .lang-switcher button {
        padding: 6px 10px;
        font-size: 0.75rem;
    }
}
</style>