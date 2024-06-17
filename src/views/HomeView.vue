<template>
  <div class="home_body">
    <navMenu></navMenu>
    
    <div class="home-container">
      <h2 class="w-full mt-6 text-zinc-700 font-bold text-center text-2xl ">Сканирование IMEI</h2>
      
      <div class="flex justify-center">
        
        <div class="w-full max-w-lg m-6 bg-white rounded">
          <div class="flex justify-center">
        <div class="bg-white border-2 border-sky-500 rounded p-4 w-full max-w-lg mb-4 relative">
          <input type="text" v-model="manualImei" placeholder="Введите IMEI вручную" class="w-full p-2 mb-4">
          <button class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" @click="checkManualImei">Проверить</button>
        </div>
      </div>
          <div class="flex justify-center mb-4">
            <div class="w-full bg-white hover:bg-gray-100 h-64 border-2 border-dashed border-sky-500 hover:border-gray-500 text-gray-600 hover:text-sky-500 duration-500 rounded p-4 relative">
              <ImageBarcodeReader
                class="absolute top-0 left-0 w-full h-full opacity-0"
                @decode="onDecode"
                @error="onError"
              />
              <div class="flex flex-col items-center justify-center h-full">
                <img src="../assets/upload.png" class="h-10 w-10 md:w-15 md:h-15  sm:w-10 sm:h-10 xs:w-5 xs:h-5" alt="Upload Image">
                <p class="text-center">Перетащите изображение или нажмите, чтобы загрузить изображение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex justify-center">
        <!-- данные о найденном телефоне -->
        <div v-if="foundPhone" class="bg-white border-2 border-sky-500 rounded p-4 w-full max-w-lg mb-4 relative">
          <div class="absolute top-0 right-0 p-2">
            <button class="text-gray-600 hover:text-gray-900 transition duration-300" @click="closeFoundPhone">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 class="text-lg font-bold mb-2">{{ foundPhone.phoneName }}</h2>
          <p class="text-gray-600">Цвет: {{ foundPhone.color }}</p>
          <p class="text-gray-600">IMEI: {{ foundPhone.imei }}</p>
          <p class="text-gray-600">Описание: {{ foundPhone.opisanie }}</p>
          <!-- добавьте другие детали телефона, если они доступны -->
        </div>
        <div v-else-if="scannedImei" class="bg-white border-2 border-sky-500 rounded p-4 w-full max-w-lg mb-4 relative">
          <div class="absolute top-0 right-0 p-2">
            <button class="text-gray-600 hover:text-gray-900 transition duration-300" @click="clearScannedImei">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 class="text-lg font-bold mb-2">IMEI: {{ scannedImei }}</h2>
          <h2 class="text-lg  mb-2">устройство не обнаружено в ресстре</h2>
        </div>
        
      </div>
    </div>
    <BottomUi></BottomUi>
  </div>
</template>

<script>
import navMenu from "../components/NavMenu.vue";
import BottomUi from "../components/BottomUi.vue";
import { store } from "../store/index.js";
import { ImageBarcodeReader } from "vue-barcode-reader";

export default {
  data() {
    return {
      newPost: {
        title: "",
        text: "",
        hashtags: "",
        date: "",
      },
      foundPhone: null,
      scannedImei: null,
      manualImei: "",
    };
  },
  components: {
    navMenu,
    BottomUi,
    ImageBarcodeReader,
  },
  computed: {
    userCondition() {
      return store.state.user;
    },
  },
  mounted() {
    // загрузка данных из localStorage при загрузке страницы
    const storedPhone = localStorage.getItem('foundPhone');
    if (storedPhone) {
      this.foundPhone = JSON.parse(storedPhone);
    }
  },
  methods: {
    onDecode(result) {
      const scannedImei = result;
      console.log("result:", scannedImei);
      const foundPhone = store.state.list_imei.find((phone) => phone.imei === scannedImei);

      if (foundPhone) {
        this.$message({
          type: "success",
          message: `Телефон найден: ${foundPhone.phoneName} (${foundPhone.color})`,
        });
        console.log("Информация о телефоне:", foundPhone.phoneName);
        this.foundPhone = foundPhone;
        this.scannedImei = null;
        // сохранение данных в localStorage
        localStorage.setItem('foundPhone', JSON.stringify(foundPhone));
      } else {
        this.$message({
          type: "error",
          message: "Телефон не найден в базе",
        });
        this.scannedImei = scannedImei;
        this.foundPhone = null;
        localStorage.removeItem('foundPhone');
      }
    },
    onError() {
      this.$message({
        type: "error",
        message: "Штрих-код не обнаружен",
      });
      console.log("Error: ");
      this.scannedImei = null;
      this.foundPhone = null;
      localStorage.removeItem('foundPhone');
    },
    closeFoundPhone() {
      this.foundPhone = null;
      this.scannedImei = null;
      localStorage.removeItem('foundPhone');
    },
    clearScannedImei() {
      this.scannedImei = null;
    },
    checkManualImei() {
      const foundPhone = store.state.list_imei.find((phone) => phone.imei === this.manualImei);

      if (foundPhone) {
        this.$message({
          type: "success",
          message: `Телефон найден: ${foundPhone.phoneName} (${foundPhone.color})`,
        });
        console.log("Информация о телефоне:", foundPhone.phoneName);
        this.foundPhone = foundPhone;
        this.scannedImei = null;
        this.manualImei = "";
        // сохранение данных в localStorage
        localStorage.setItem('foundPhone', JSON.stringify(foundPhone));
      } else {
        this.$message({
          type: "error",
          message: "Телефон не найден в базе",
        });
        this.scannedImei = this.manualImei;
        this.foundPhone = null;
        this.manualImei = "";
        localStorage.removeItem('foundPhone');
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home_body {
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  /* background: url("../assets/fon.png") no-repeat; */
  /* background-size: cover;
  background-position: center; */
}
.home-container {
  min-height: 100vh;
}
@media (max-width: 768px) {
  .home-container {
    padding: 20px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-md {
    max-width: 100%;
  }
}
</style>