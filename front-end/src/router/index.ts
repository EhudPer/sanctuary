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
    path: "/animals",
    name: "AnimalsList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "animalsList" */ "../views/AnimalsList.vue"),
  },
  {
    path: "/animals/:animalId",
    name: "AnimalDetails",
    component: () =>
      import(
        /* webpackChunkName: "animalDetails" */ "../views/AnimalDetails.vue"
      ),
  },
  {
    path: "/animals/edit/:animalId",
    name: "AnimalEdit",
    component: () =>
      import(/* webpackChunkName: "AnimalEdit" */ "../views/AnimalEdit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
