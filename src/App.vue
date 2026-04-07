<script setup>
import MenuPanel from './components/Common/MenuPanel.vue'
import News from './components/Common/News.vue'
import NavBar from './components/Common/NavBar.vue'
</script>

<template>
  
  <div class="app-container">
    <MenuPanel />
    <div class="Menu-content">
      <NavBar />    
      <div class="content">  
        <News />
        <p>Hello, World!</p>
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
