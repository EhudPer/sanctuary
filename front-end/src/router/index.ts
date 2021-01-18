import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "@/views/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
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

router.beforeEach((to, from, next) => {
  const authenticatedUser = null;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedUser) next("login");
  else next();
});

export default router;
