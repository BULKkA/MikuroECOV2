<script setup>
import { provide, ref } from 'vue'
import MenuPanel from './components/Common/MenuPanel.vue'
import NavBar from './components/Common/NavBar.vue'
import { RouterView } from 'vue-router'
import { translate } from './translations.js'

const lang = ref('ru')
const setLang = (value) => {
  lang.value = value
}

const t = (key) => translate(lang.value, key)

provide('lang', lang)
provide('setLang', setLang)
provide('t', t)
</script>

<template>
  <div class="app-container">
    <MenuPanel />
    <div class="Menu-content">
      <NavBar />
      <div class="content">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}
.Menu-content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.content {
  width: 100%;
}

@media (max-width: 768px) {
  .app-container {
    padding: 0 0.75rem;
  }
  .Menu-content {
    flex-direction: column;
    gap: 10px;
  }
  .content {
    padding-bottom: 90px;
  }
}
</style>
