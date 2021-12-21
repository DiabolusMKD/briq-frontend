<template>
  <TopBar :stats="stats" />
  <div id="nav">
    <router-link :to="{ name: 'BookingList' }">Home</router-link> |
    <router-link :to="{ name: 'Alerts' }">Booking Alerts</router-link>
  </div>
  <router-view />
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  components: {
    TopBar,
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style: none;
}
</style>
