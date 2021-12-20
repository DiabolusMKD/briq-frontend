import { createStore } from "vuex";
import BookingService from "../services/BookingService";

export default createStore({
  state: {
    stats: {},
    bookings: [],
    booking: {},
    front_desk_alerts: [],
    front_desk_alert: {},
  },
  mutations: {
    SET_STATS(state, stats) {
      state.stats = stats;
    },
  },
  actions: {
    fetchStats({ commit }) {
      return BookingService.getStats()
        .then((response) => {
          commit("SET_STATS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
