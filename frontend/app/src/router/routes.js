import tvRoutes from './tvRoutes'

const routes = [
  {
    path: '',
    redirect: '/app'
  },
  {
    path: "/login",
    component: () => import("layouts/Unauthenticated.vue"),
    children: [{ path: "", component: () => import("pages/auth/Login.vue") }]
  },
  {
    path: "/logout",
    component: () => import("layouts/Unauthenticated.vue"),
    children: [{ path: "", component: () => import("pages/auth/Logout.vue") }]
  },
  {
    path: "/app",
    name: "Home",
    meta: { icon: "fas fa-home" },
    component: () => import("layouts/MenuLayout"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Home",
        meta: { icon: "fas fa-home" }
      },
      {
        path: "admin",
        component: () => import("pages/admin/menu.vue"),
        name: "Admin Panel",
        meta: { icon: "fas fa-user-cog" }
      },
      {
        path: "admin/users",
        component: () => import("pages/admin/users.vue"),
        name: "Users",
        meta: { icon: "fas fa-users" }
      }
    ]
  },

  {
    path: "/app/admin/users",
    name: "Users",
    component: () => import("layouts/FormLayout.vue"),
    children: [
      {
        path: "new",
        name: "Add User",
        component: () => import("pages/admin/EditUser.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: "settings/:id",
        name: "Edit User",
        component: () => import("pages/admin/EditUser.vue"),
        name: "User Settings",
        meta: { mode: "edit", icon: "fas fa-cog" }
      }
    ]
  },

  {
    path: "/app/setup",
    component: () => import("layouts/MenuLayout")
  },
  ...tvRoutes
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
