<template>
  <TopBar :stats="stats" />
  <div id="nav">
    <router-link :to="{ name: 'BookingList' }">Bookings List</router-link>
    <router-link :to="{ name: 'Alerts' }">Booking Alerts</router-link>
  </div>
  <div v-if="notification_message">
    <NotificationMessage :notification_message="notification_message" />
  </div>
  <router-view />
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import NotificationMessage from "@/components/NotificationMessage.vue";

export default {
  components: {
    TopBar,
    NotificationMessage,
  },
  created() {
    this.$store.dispatch("fetchStats").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    stats() {
      return this.$store.state.stats;
    },
    notification_message() {
      return this.$store.state.notification_message;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2rem;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style: none;
}
html,
body {
  margin: 0;
  padding: 0;
}
.booking-list,
.alert-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem;
}
@media (min-width: 801px) {
  .booking-list,
  .alert-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
.booking-card,
.alert-card {
  border: 1px solid #000;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
}
.booking-card:hover,
.alert-card:hover {
  cursor: pointer;
  background-color: rgba(66, 185, 131, 0.4);
}
.booking-card h2 {
  margin: 2rem 0;
}
.booking-card p,
.alert-card p {
  font-size: 1.2rem;
  text-align: left;
}
.card-title {
  margin-right: 1rem;
  margin-left: 1rem;
}
.card-value {
  display: inline-flex;
}
.card-value ul {
  margin: 0;
}
</style>
