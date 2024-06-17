<template>
  <footer class="bg-gray-200 h-1/5 md:h-48 py-12 md:py-6">
    <div class="container mx-auto p-4 md:p-6">
      <div class="flex flex-wrap justify-center md:flex-no-wrap">
        
        <div class="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6">
          <!-- <h5 class="uppercase text-lg mb-2">Навигация</h5> -->
          <router-link to="/" class="uppercase text-lg mb-2">Навигация</router-link>
          <ul>
            
            <li>
              <router-link to="/list" v-if="user" class="text-gray-600 hover:text-gray-900"
                >Реестр</router-link
              >
            </li>
            <li>
              <router-link to="/guide" class="text-gray-600 hover:text-gray-900"
                >Руководство</router-link
              >
            </li>
            <li>
              <router-link to="/about-us" class="text-gray-600 hover:text-gray-900"
                >О нас</router-link
              >
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6">
          <h5 class="uppercase text-lg mb-2">Контакты</h5>
          <ul>
            <li>
              <a
                href="tel:+79962635032"
                class="text-gray-600 hover:text-gray-900"
                >+7 996 263 5032</a
              >
            </li>
            <li>
              <a
                href="mailto:dmitriyoorzhak2004@gmail.com"
                type="email"
                class="text-gray-600 hover:text-gray-900"
                >dmitriyoorzhak2004@gmail.com</a
              >
            </li>
            <li>
              <a
                href="https://vk.com/d1.moon"
                type="email"
                class="text-gray-600 hover:text-gray-900"
                >ВКонтакте</a
              >
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center text-gray-600 mt-1">
        &copy; 2024 Сканнер IMEI. Все права защищены.
      </p>
    </div>
  </footer>
</template>

<script>
import {store} from '../store/index.js';
export default {
  name: "Footer",
  computed: {
    user() {
      return store.state.user;
    },
  }
};
</script>
