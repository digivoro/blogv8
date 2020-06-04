import Vue from "vue";
import VueRouter from "vue-router";

// Vistas
import Portada from "../views/Portada.vue";
import SobreMi from "../views/SobreMi.vue";
import Contacto from "../views/Contacto.vue";
import Post from "../views/Post.vue";
import NotFound from "../views/NotFound.vue";
import Administrador from "../views/Administrador.vue";
// Componentes
import Articulo from "../components/Articulo.vue";
import AdministradorAvanzado from "../components/AdministradorAvanzado.vue";
import AdministradorSimple from "../components/AdministradorSimple.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/",
    name: "Portada",
    component: Portada
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
    alias: ["/acerca"]
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
    alias: ["/contactame"]
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":postId",
        name: "Post",
        component: Articulo
      }
    ]
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    children: [
      {
        path: "simple",
        name: "AdministradorSimple",
        component: AdministradorSimple
      },
      {
        path: "avanzado",
        name: "AdministradorAvanzado",
        component: AdministradorAvanzado
      }
    ]
  },
  {
    path: "/portada",
    redirect: { name: "Portada" }
  },
  {
    path: "/home",
    redirect: { name: "Portada" }
  },
  {
    path: "/inicio",
    redirect: { name: "Portada" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
