import Vue from "vue";
import VueRouter from "vue-router";

// Vistas
import Portada from "../views/Portada.vue";
// import SobreMi from "../views/SobreMi.vue";
// import Contacto from "../views/Contacto.vue";
// import Post from "../views/Post.vue";
// import NotFound from "../views/NotFound.vue";
// import Administrador from "../views/Administrador.vue";

// Componentes
// import Articulo from "../components/Articulo.vue";
// import AdministradorAvanzado from "../components/AdministradorAvanzado.vue";
// import AdministradorSimple from "../components/AdministradorSimple.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portada",
    component: Portada
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue")
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: () =>
      import(/*webpackChunkName: "SobreMi"*/ "../views/SobreMi.vue"),
    alias: ["/acerca"]
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/*webpackChunkName: "Contacto"*/ "../views/Contacto.vue"),
    alias: ["/contactame"]
  },
  {
    path: "/post",
    name: "Post",
    component: () => import(/*webpackChunkName: "Post"*/ "../views/Post.vue"),
    children: [
      {
        path: ":postId",
        name: "Post",
        component: () =>
          import(/*webpackChunkName: "Articulo"*/ "../components/Articulo.vue")
      }
    ]
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: () =>
      import(
        /*webpackChunkName: "Administrador"*/ "../views/Administrador.vue"
      ),
    children: [
      {
        path: "simple",
        name: "AdministradorSimple",
        component: () =>
          import(
            /*webpackChunkName: "AdministradorSimple"*/ "../components/AdministradorSimple.vue"
          )
      },
      {
        path: "avanzado",
        name: "AdministradorAvanzado",
        component: () =>
          import(
            /*webpackChunkName: "AdministradorAvanzado"*/ "../components/AdministradorAvanzado.vue"
          )
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
