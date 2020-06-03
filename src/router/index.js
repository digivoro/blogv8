import Vue from "vue";
import VueRouter from "vue-router";
import Portada from "../views/Portada.vue";
import SobreMi from "../views/SobreMi.vue";
import Contacto from "../views/Contacto.vue";
import Post from "../views/Post.vue";
import NotFound from "../views/NotFound.vue";

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
    component: SobreMi
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  },
  {
    path: "/post/",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":postId",
        name: "Post",
        component: Post
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
