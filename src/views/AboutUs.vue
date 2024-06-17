<template>
    <div class="aboutUs_body">
      <NavMenu></NavMenu>
      <div class="aboutUs-container mx-auto max-w-xl p-4 pt-6 pb-8">
        <!-- данные страницы О нас, все что внутри этого блока, можешь удалить и переделать   -->
        <h1 class="text-3xl font-bold mb-4">О нас</h1>
      <p class="text-lg mb-4">Данный проект заботится о клиентах, которые приобретают телефоны на вторичном рынке. Мы хотим помочь вам проверить покупаемый телефон на предмет того, является ли он украденным или нет.</p>
      <p class="text-lg mb-4">Приложение создано в 2023 году студентом <b>Ооржак Дима Андриянович</b> выпускной группы 40Б "Информационные системы и программирование" техникума "Тувинский Техникум Информационных Технологий"</p>
      <p class="text-lg mb-4">Проект разработан совместно с научными руководителями: 
        <ul>
          <li> - Ондар Шенне Алексеевна,</li>
          <li> - Ооржак Кан-Болат Владимирович</li>
        </ul>  
      </p>
    
      </div>
      <BottomUi></BottomUi>
    </div>
  </template>
  
  <script>
  import NavMenu from "@/components/NavMenu.vue";
  import BottomUi from "../components/BottomUi.vue";
  
  // import {store} from '../store/index.js';
  
  export default {
    components: {
      NavMenu,
      BottomUi,
    },
  };
  </script>
  
  <style scoped>
  .aboutUs_body {
    min-height: 100vh;
  }
  .aboutUs-container {
    min-height: 100vh;
  }
  </style>
  