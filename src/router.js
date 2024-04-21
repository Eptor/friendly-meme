import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import HomePage from "./components/HomePage.vue";
import UserPage from "./components/UserPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/user",
    name: "user",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
