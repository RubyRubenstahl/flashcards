
const routes = [
  {
    path: "",
    redirect: "/app"
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
    component: () => import("layouts/MainLayout"),
    children: [
      {
        path: "",
        component: () => import("pages/mail/Inbox.vue"),
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
    path: "/app/settings/users",
    name: "Users",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Users",
        components: {
          default: () => import("pages/settings/users/UserListPage.vue"),
          actions: () => import("components/users/UsersActionList.vue")
        },
        meta: { mode: "new", icon: "fas fa-users" }
      },

      {
        path: "new",
        name: "Add User",
        component: () => import("pages/settings/users/NewUserPage.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: ":id",
        name: "Edit User",
        component: () => import("pages/settings/users/EditUserPage.vue"),
        name: "User Settings",
        meta: { mode: "edit", icon: "fas fa-cog" }
      }
    ]
  },

  {
    path: "/app/projects",
    name: "Projects",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Projects",
        components: {
          default: () => import("pages/projects/ProjectListPage.vue"),
          actions: () => import("components/projects/ProjectsActionList.vue")
        },
        meta: { mode: "new", icon: "fas fa-projects" }
      },

      {
        path: "new",
        name: "Add Project",
        component: () => import("pages/projects/NewProjectPage.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: ":id",
        name: "Edit Project",
        component: () => import("pages/projects/EditProjectPage.vue"),
        name: "Project Settings",
        meta: { mode: "edit", icon: "fas fa-cog" }
      }
    ]
  },

  {
    path: "/app/companies",
    name: "Companies",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Companies",
        components: {
          default: () => import("pages/companies/CompanyListPage.vue"),
          actions: () => import("components/companies/CompaniesActionList.vue")
        },
        meta: { mode: "new", icon: "fas fa-companies" }
      },

      {
        path: "new",
        name: "Add Company",
        component: () => import("pages/companies/NewCompanyPage.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: ":id",
        name: "Edit Company",
        component: () => import("pages/companies/EditCompanyPage.vue"),
        name: "Company Settings",
        meta: { mode: "edit", icon: "fas fa-cog" }
      }
    ]
  },

  {
    path: "/app/setup",
    component: () => import("layouts/MenuLayout")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
