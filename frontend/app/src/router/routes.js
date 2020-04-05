
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
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/app/setup",
    component: () => import("layouts/MainLayout"),
    children: [{ path: "tvs", component: () => import("pages/setup/TVs.vue") }],
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
