import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionsView from "@/views/QuestionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/questions",
      name: "questions",
      component: QuestionsView,
    },
    {
      path: "/results",
      name: "results",
      component: () => import("@/views/ResultView.vue"),
    },
  ],
});

export default router;
