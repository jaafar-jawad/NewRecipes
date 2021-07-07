const routes = [
  {
    path: "/",
    component: () => import("layouts/nav.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Registration.vue"),
      },
      { path: "/Login", component: () => import("pages/Login.vue") },
      { path: "/NewRecipes", component: () => import("pages/NewRecipes.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
