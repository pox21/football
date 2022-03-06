import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import PostPage from "../views/PostPage.vue";
import NotFound from "../views/404.vue";

const history = createWebHashHistory();
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/competitions/",
    name: "competitions",
    component: Home,
  },
  {
    path: "/competitions/:id",
    name: "competitionsitem",
    component: PostPage,
  },
  {
    path: "/teams/",
    name: "teams",
    component: Home,
  },
  {
    path: "/teams/:id",
    name: "teamsitem",
    component: PostPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
