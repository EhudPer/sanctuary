import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import { isAuthToken } from "../helper-functions/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/views/Auth.vue"),
  },
  {
    path: "/animals",
    name: "AnimalsList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "animalsList" */ "@/views/AnimalsList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/animals/add",
    name: "AddAnimal",
    component: () =>
      import(/* webpackChunkName: "addAnimal" */ "@/views/AddAnimal.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/animals/:animalId",
    name: "AnimalDetails",
    component: () =>
      import(
        /* webpackChunkName: "animalDetails" */ "@/views/AnimalDetails.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/animals/edit/:animalId",
    name: "AnimalEdit",
    component: () =>
      import(/* webpackChunkName: "AnimalEdit" */ "@/views/AnimalEdit.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticatedUser = !localStorage.getItem("token")
    ? false
    : await isAuthToken(localStorage.getItem("token"));

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !isAuthenticatedUser) next("auth");
  else if (to.path.toString() === "/auth" && isAuthenticatedUser)
    next("/animals");
  else next();
});

export default router;
