import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "../db.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list_imei: [],
    user: null,
    barcode:[],
    
    newPhone: {
      phoneName: "",
      color: "",
      imei: "",
      opisanie: "",
    },
  },
  getters: {},
  mutations: {
    ...vuexfireMutations,
    SET_USER(state, user) {
      state.user = user;
    },
    SET_BARCODE(state, result) {
      state.newStudent = result;
    },

    deletePhone(state, phoneId) {
      state.list_imei = state.list_imei.filter(phone => phone.id !== phoneId);
    },
    SET_ADDPHONE(state, newPhone) {
      state.newPhone = newPhone;
    },
  },
  actions: {
    bindImeis: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("list_imei", db.collection("list_imei"));
    }),

    // updateStudent: firestoreAction((context, { id, doc }) => {
    //   db.collection("students").doc(id).update(doc);
    // }),
    

    async addPhone({ commit }, newPhone) {
      try {
        await db.collection("list_imei").add(newPhone);
        commit("SET_ADDPHONE", [this.state.newPhone, newPhone]);
      } catch (error) {
        console.error("Ошибка при добавлении ученика", error);
      }
    },


    async deletePhone({ commit }, phoneId) {
      try {
        await db.collection('list_imei').doc(phoneId).delete();
        commit('deletePhone', phoneId);
        console.log('Запись удалена!');
      } catch (error) {
        console.error('Ошибка при удалении записи:', error);
      }
    },

    async login(context, { email, password }) {
      // console.log(email)
      // console.log(password)
      const promise = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      try {
        if (promise) {
          store.commit("SET_USER", promise.user);
        } else {
          throw new Error("error");
        }
      } catch (error) {
        // console.log(error)
      }
    },
    async registerUser({ commit }, { email, password }) {
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        commit("SET_USER", user);
        // Добавьте дополнительную логику регистрации, если необходимо
      } catch (error) {
        console.error(error);
        // Обработайте ошибку регистрации
      }
    },
    async signout() {
      try {
        await firebase.auth().signOut();
        store.commit("SET_USER", null);
      } catch (error) {
        // console.error("Ошибка при выходе из системы:", error);
      }
    },
  },
  modules: {},
});
store.dispatch("bindImeis");
