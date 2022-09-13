import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import CarrosPage from "../views/CarrosPage.vue";
import ServicosPage from "../views/ServicosPage.vue";
import FuncionariosPage from "../views/FuncionariosPage.vue";
import OrdensPage from "../views/OrdensPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/carros",
    name: "carros",
    component: CarrosPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/servicos",
    name: "servicos",
    component: ServicosPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/funcionarios",
    name: "funcionarios",
    component: FuncionariosPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/ordens",
    name: "ordens",
    component: OrdensPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  // if (to.meta.requiresAuth) next({ name: "login" });
  // else next();
  next();
});

export default router;
