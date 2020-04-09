export default [
      {
    path: "/app/tv",
    name: "Home",
    meta: { icon: "fas fa-home" },
    component: () => import("layouts/MenuLayout"),
    children: [
      {
        path: "",
        component: () => import("pages/tv/TvMenu.vue"),
        name: "TV",
        meta: { icon: "tv" }
      },
    ]
  },
    
    {
      

        
    path: "/app/tv",
    name: "TV",
    component: () => import("layouts/FormLayout.vue"),
    children: [
      {
        path: "new",
        name: "Add TV",
        component: () => import("pages/tv/EditTv.vue"),
        meta: { mode: "new", icon: "fas fa-plus-circle" }
      },
      {
        path: "edit/:id",
        name: "Edit TV Settings",
        component: () => import("pages/tv/EditTv.vue"),
        name: "Edit TV Settings",
        meta: { mode: "edit", icon: "fas fa-edit" }
      }
    ]
  },
  {
    path: "/app/tv/remote/",
    component: () => import("layouts/TvRemoteLayout"),
    children: [
      {
        path: ":id",
        component: () => import("pages/tv/TvRemote.vue")
      }
    ]
  },


];