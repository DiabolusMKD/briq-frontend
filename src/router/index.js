import { createRouter, createWebHistory } from "vue-router";
import BookingList from "@/views/BookingList.vue";
import ErrorDisplay from "@/views/ErrorDisplay.vue";
import BookingNotification from "@/views/BookingNotification.vue";

const routes = [
  {
    path: "/",
    name: "BookingList",
    component: BookingList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/bookings/notification/:id",
    name: "BookingNotification",
    props: true,
    component: BookingNotification,
  },
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    props: true,
    component: ErrorDisplay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
