<template>
  <h1>Alert Notifications</h1>
  <div class="alert-list">
    <BookingAlertCard
      v-for="(alert, key) in front_desk_alerts.frontDeskAlerts"
      :key="key"
      :alert="alert"
    />
  </div>
</template>

<script>
import BookingAlertCard from "@/components/BookingAlertCard.vue";

export default {
  name: "Alerts",
  components: {
    BookingAlertCard,
  },
  created() {
    this.$store.dispatch("fetchBookingNotifications").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    front_desk_alerts() {
      return this.$store.state.front_desk_alerts;
    },
  },
};
</script>
