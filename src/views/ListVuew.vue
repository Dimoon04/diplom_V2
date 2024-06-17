<template>
  <div class="list_body">
    <NavMenu></NavMenu>
    <div class="list-container">
      <div class="flex flex-wrap justify-center">
        <h2 class="text-gray-800 m-4 text-center w-full font-bold">РЕЕСТР УСТРОЙСТВ</h2>
        <!-- {{ list_imeis }} -->
        <div class="w-full m-6 border-2 border-sky-500 rounded md:w-full lg:w-2/3 xl:w-2/3 ">
          <el-table :data="list_imeis" class=" shadow-md rounded ">
            <el-table-column
              prop="phoneName"
              label="Название устройства"
              width="200px"
            >
            </el-table-column>
            <el-table-column
              prop="color"
              label="Цвет"
            >
            </el-table-column>
            <el-table-column
              prop="imei"
              label="IMEI"
            >
            </el-table-column>
            <el-table-column
              prop="opisanie"
              label="Описание"
            >
            </el-table-column>
            <el-table-column width="120px">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  size="small"
                  @click="deletePhone(scope.row)"
                  >Удалить</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- форма добавления устройства -->
        <div class="w-full m-6 border-2 border-sky-500 shadow-md rounded md:w-full lg:w-2/3 xl:w-2/3 p-4">
          <form class="bg-white  px-8 pt-6 pb-8 mb-4">
            <h2 class="text-gray-800 text-lg mb-4">Добавить устройство</h2>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneName">
                Название устройства
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneName"
                type="text"
                v-model="newPhone.phoneName"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="color">
                Цвет
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="text"
                v-model="newPhone.color"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="imei">
                IMEI
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="imei"
                type="text"
                v-model="newPhone.imei"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="opisanie">
                Описание
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="opisanie"
                v-model="newPhone.opisanie"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="addPhone"
              >
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <BottomUi></BottomUi>
  </div>
</template>

<script>
import { store } from "../store/index.js";
import NavMenu from "@/components/NavMenu.vue";
import BottomUi from "@/components/BottomUi.vue";

export default {
  name: "list",
  data() {
    return {
      newPhone: {
        phoneName: "",
        color: "",
        imei: "",
        opisanie: "",
      },
    };
  },
  components: {
    NavMenu,
    BottomUi,
  },
  computed: {
    userCondition() {
      return store.state.user;
    },
    list_imeis() {
      return store.state.list_imei;
    },
  },
  methods: {
    addPhone() {
    try {
      store.dispatch("addPhone", this.newPhone);
      this.$message({
        type: "success",
        message: "Запись добавлен!",
      });
      this.newPhone = {
        phoneName: "",
        color: "",
        imei: "",
        opisanie: "",
      };
    } catch (error) {
      this.$message({
        message: "Ошибка при добавлении записи!",
        type: "warning",
      });
    }
  },
    deletePhone(phone) {
      // Implement your delete logic here
      this.$confirm("Вы действительно хотите удалить данные этого устройства?", "Удаление", {
        confirmButtonText: "Да",
        cancelButtonText: "нет",
        type: "warning",
      })
        .then(() => {
          store.dispatch("deletePhone", phone.id)
          console.log(`Delete phone: ${phone.phoneName}`);
          
          this.$message({
            type: "info",
            message: "Данные удалены",
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

<style>
* {
  margin: 0;
  padding: 0;
}
.list_body {
  min-height: 100vh;
}
.list-container {
  min-height: 92vh;
}
</style>