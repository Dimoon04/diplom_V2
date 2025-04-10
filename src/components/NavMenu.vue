<template>
  <div>
    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center">
          <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
          <button
            type="button"
            class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <a href="#">
              <span class="sr-only">Сканер Imei-кода</span>
              <img class="h-8 w-auto" src="../assets/logo.png" alt="" />
            </a>
          </div>

          <!-- Flyout menus -->
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">
              <div class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <!-- <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Women</button> -->
                  <router-link
                    to="/"
                    class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                    aria-expanded="false"
                    >Главная</router-link
                  >
                </div>

                <!-- 'Women' flyout menu, show/hide based on flyout menu state. -->
                <!-- ... -->
              </div>
              <div v-if="user" class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <!-- <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Men</button> -->
                  <router-link
                    to="/list"
                    class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                    aria-expanded="false"
                    >Ресстр</router-link
                  >
                </div>

                <!-- 'Men' flyout menu, show/hide based on flyout menu state. -->
                <!-- ... -->
              </div>
              <router-link
                to="/guide"
                class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                aria-expanded="false"
                >Руководство</router-link>
              <router-link
                to="/about-us"
                class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                aria-expanded="false"
                >О нас</router-link
              >
              
              <!-- <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a> -->
              <!-- <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a> -->
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div
              class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
              v-if="!user"
            >
              <!-- <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a> -->
              <router-link
                to="/login"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Авторизоваться</router-link
              >
              <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <!-- <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a> -->
              <!-- <router-link
                to="/register"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Зарегистрироваться</router-link
              > -->
            </div>
            <div
              class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
              v-if="user"
            >
            <router-link
                to="/register"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Регистрация</router-link
              >
              <!-- <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a> -->
              <button
                @click="SignOut()"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on mobileMenuOpen state. -->
      <div
        class="lg:hidden bg-white rounded-lg z-50 p-8 fixed"
        v-if="mobileMenuOpen"
      >
        <!-- Mobile menu content here -->
        <div class="flex flex-col space-y-4">
          <router-link
            to="/"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            >Главная</router-link
          >
          <router-link
            v-if="user"
            to="/list"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            >Реестр</router-link
          >
          <router-link
            to="/guide"
            class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
            aria-expanded="false"
            >Руководство</router-link
          >
          <router-link
            to="/about-us"
            class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
            aria-expanded="false"
            >О нас</router-link
          >
          <router-link
            to="/login"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            v-if="!user"
            >Авторизоватся</router-link
          >
          <router-link
            to="/register"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            v-if="user"
            >Регистрация</router-link
          >
          <button
            @click="SignOut()"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            v-if="user"
          >
            Выйти
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { store } from "../store/index.js";
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    user() {
      return store.state.user;
    },
  },
  methods: {
    async SignOut() {
      this.$confirm("Вы действительно хотите выйти из аккаунта?", "Выход", {
        confirmButtonText: "Да",
        cancelButtonText: "нет",
        type: "warning",
      })
        .then( async() => {
          await store.dispatch("signout"); //вызов метода выхода из аккаунта (в файле store)
          await this.$router.push('/'); //исправлена ошибка, чтобы при выходе из аккаунта перенаправляло на главную страницу
          this.$message({
            type: "info",
            message: "Выполнен выход из аккаунта",
          });
        })
        .catch(() => {
          this.$message({
            type: "success",
            message: "Отменено",
          });
        });
    },
  },
};
</script>

<style></style>
