import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import firebase from "firebase/compat/app";
import { store } from "../store/index.js";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { requiresAuth: false },
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: { requiresAuth: false },
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { requiresAuth: true },

    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/list",
    name: "List",
    meta: { requiresAuth: true },

    component: () => import("../views/ListVuew.vue"),
  },
  {
    path: "/about-us",
    name: "about-us",
    meta: { requiresAuth: false },

    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/guide",
    name: "Guide",
    meta: { requiresAuth: false },

    component: () => import("../views/InstructionView.vue"),
  },
  
  
];

const router = new VueRouter({
  routes,
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("currentUser");
  }
});
window.onload = function () {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    let user = JSON.parse(currentUser);
    store.commit("SET_USER", user);
  }

  router.beforeEach((to, from, next) => {
    const isLoggedIn = !!store.state.user;
    if (to.meta.requiresAuth && !isLoggedIn) {
      next("/");
      alert("Вы не можете перейти на эту страницу без авторизации.");
    } else {
      next();
    }
  });
};

export default router;
