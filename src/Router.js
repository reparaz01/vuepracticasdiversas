import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicarComponent from "./components/TablaMultiplicarComponent.vue";


const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/collatz",
    component: CollatzComponent,
  },
  {
    path: "/tablamultiplicar",
    component: TablaMultiplicarComponent,
  },

];

//Creamos una constante para el historial y para el array de rutas
//Dicha constante sera la que utilicemos dentro del main.js

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

//Por ultimo exportamos la la constante router
export default router;