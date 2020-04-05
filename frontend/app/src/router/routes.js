
const routes = [
  {
    path: "/login",
    component: () => import("layouts/Unauthenticated.vue"),
    children: [{ path: "", component: () => import("pages/auth/Login.vue") }],
  },
  {
    path: "/logout",
    component: () => import("layouts/Unauthenticated.vue"),
    children: [{ path: "", component: () => import("pages/auth/Logout.vue") }],
  },
  {
    path: "/app",
    component: () => import("layouts/MainLayout"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "tv", component: () => import("pages/tv/TvMenu.vue") },
      {
        path: "tv/settings",
        component: () => import("pages/tv/TvSettings.vue"),
      },
      {
        path: "tv/remote/:id",
        component: () => import("pages/tv/TvRemote.vue"),
      },
      { path: "tv/new", component: () => import("pages/tv/EditTv.vue"), meta: {mode: 'new'} },
      { path: "tv/edit/:id", component: () => import("pages/tv/EditTv.vue") , meta: {mode: 'edit'}},
    ],
  },

  {
    path: "/app/setup",
    component: () => import("layouts/MainLayout"),
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
