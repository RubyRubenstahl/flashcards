
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
    path: "/app/tv/remote/",
    component: () => import("layouts/TvRemoteLayout"),
    children: [
      {
        path: ":id",
        component: () => import("pages/tv/TvRemote.vue"),
      },
    ],
  },
  {
    path: "/app",
    name: "Home",
    meta: { icon: "fas fa-home" },
    component: () => import("layouts/MainLayout"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Home",
        meta: { icon: "fas fa-home" },
      },
      {
        path: "tv",
        component: () => import("pages/tv/TvMenu.vue"),
        name: "TV",
        meta: { icon: "tv" },
      },
      {
        path: "tv/settings",
        component: () => import("pages/tv/TvSettings.vue"),
        name: "TV Settings",
        meta: { icon: "fas fa-cog" },
      },
      {
        path: "tv/new",
        name: "Add TV",
        component: () => import("pages/tv/EditTv.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" },
      },
      {
        path: "tv/edit/:id",
        component: () => import("pages/tv/EditTv.vue"),
        name: "TV Settings",
        meta: { mode: "edit", icon: "fas fa-edit" },
      },
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
