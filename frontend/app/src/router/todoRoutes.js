export default [
  {
    path: "/app/todo",
    name: "Todo",
    meta: { icon: "fas fa-check" },
    component: () => import("layouts/TodoLayout"),
    children: [
      {
        path: "",
        component: () => import("pages/todo/Todos.vue"),
        name: "To Do",
        meta: { icon: "todo" }
      }
    ]
  },

  {
    path: "/app/todo",
    name: "To Do",
    component: () => import("layouts/FormLayout.vue"),
    children: [
      {
        path: "new",
        name: "Add To Do",
        component: () => import("pages/todo/EditTodo.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: "edit/:id",
        name: "Edit To Do Settings",
        component: () => import("pages/todo/EditTodo.vue"),
        name: "Edit To Do Settings",
        meta: { mode: "edit", icon: "fas fa-edit" }
      }
    ]
  },

];
