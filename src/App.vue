<script setup>
import MenuPanel from './components/Common/MenuPanel.vue'
import Home from './components/Common/News.vue'
import NavBar from './components/Common/NavBar.vue'
import About from './components/Common/About.vue'
import Roll from './components/Common/Roll.vue'

import { ref, computed } from 'vue'

const activeTab = ref('home') 

//Преобразуем строку в настоящий компонент
const currentComponent = computed(() => {
  switch (activeTab.value) {
    case 'home':   return Home  
    case 'about':  return About
    case 'roll': return Roll     // добавь остальные по мере необходимости
    case 'favorites': return Home
    default:       return Home
  }
})
</script>

<template>
  
  <div class="app-container">
    <MenuPanel/>
    <div class="Menu-content">
      <NavBar v-model="activeTab"/>    
      <div class="content">  
        <KeepAlive>
          <component :is="currentComponent" />
        </KeepAlive>
      </div> 
    </div> 
  </div>
  
</template>


<style scoped>
.app-container {
  /* Основные настройки */
  max-width: 1400px;                /* максимальная ширина контейнера */
  width: 100%;                      /* занимает всю доступную ширину до max-width */
  margin: 0 auto;                   /* главное — центрирование */
  position: block;
  /* Отступы по бокам на маленьких экранах */
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  
  /* Можно добавить красивые отступы сверху/снизу */
  /* padding-top: 2rem; */
    
}
.Menu-content {
  display: flex;
  flex-direction: row;
  gap: 20px; /* отступ между NavBar и контентом */
}

</style>
