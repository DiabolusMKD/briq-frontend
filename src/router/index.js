import { createRouter, createWebHistory } from "vue-router";
import BookingList from "@/views/BookingList.vue";
import ErrorDisplay from "@/views/ErrorDisplay.vue";
import BookingAlertCreate from "@/views/BookingAlertCreate.vue";

const routes = [
  {
    path: "/",
    name: "BookingList",
    component: BookingList,
  },
  {
    path: "/alerts",
    name: "Alerts",
    // route level code-splitting
    // this generates a separate chunk (alerts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "alerts" */ "../views/BookingAlertList.vue"),
  },
  {
    path: "/bookings/notification/:id",
    name: "BookingAlertCreate",
    props: true,
    component: BookingAlertCreate,
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
