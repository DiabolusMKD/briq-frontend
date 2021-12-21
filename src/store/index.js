import { createStore } from "vuex";
import BookingService from "../services/BookingService";

export default createStore({
  state: {
    stats: {},
    bookings: [],
    booking: {},
    front_desk_alerts: [],
    front_desk_alert: {},
    last_fetched_bookings_timestamp: "",
    notification_message: "",
  },
  mutations: {
    SET_STATS(state, stats) {
      state.stats = stats;
    },
    SET_BOOKINGS(state, bookings) {
      state.bookings = bookings;
    },
    SET_BOOKING_NOTIFICATIONS(state, alerts) {
      state.front_desk_alerts = alerts;
    },
    SET_LAST_FETCHED_BOOKINGS(state, time) {
      state.last_fetched_bookings_timestamp = time;
    },
    ADD_BOOKING_NOTIFICATION(state, notification) {
      state.front_desk_alerts.push(notification);
    },
    ADD_NOTIFICATION_MESSAGE(state, message) {
      state.notification_message = message;
    },
  },
  actions: {
    fetchStats({ commit }) {
      return BookingService.getStats()
        .then((response) => {
          commit("SET_STATS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchBookings({ commit, state }) {
      const now = new Date().getTime();
      // check if last fetched bookings time is more than 1 minute
      if (
        state.last_fetched_bookings_timestamp &&
        (now - new Date(state.last_fetched_bookings_timestamp).getTime()) /
          60000 <=
          1
      ) {
        commit("SET_BOOKINGS", state.bookings);
      } else {
        return BookingService.getBookings()
          .then((response) => {
            commit("SET_BOOKINGS", response.data);
            commit("SET_LAST_FETCHED_BOOKINGS", now);
          })
          .catch((error) => {
            throw error;
          });
      }
    },
    fetchBookingNotifications({ commit }) {
      return BookingService.getBookingNotifications()
        .then((response) => {
          commit("SET_BOOKING_NOTIFICATIONS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    createBookingNotification({ commit }, notification) {
      BookingService.postBookingNotification(notification)
        .then(() => {
          commit("ADD_BOOKING_NOTIFICATION");
          commit(
            "ADD_NOTIFICATION_MESSAGE",
            "Alert notification successfully added!"
          );
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  modules: {},
});
