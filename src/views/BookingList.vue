<template>
  <h1>Bookings</h1>
  <div class="booking-list">
    <BookingCard
      v-for="booking in bookings"
      :key="booking.id"
      :booking="booking"
      @click="createNotification(booking.id)"
      title="Create Alert Notification"
    />
  </div>
</template>

<script>
import BookingCard from "@/components/BookingCard.vue";

export default {
  name: "BookingList",
  components: {
    BookingCard,
  },
  created() {
    this.$store.dispatch("fetchBookings").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    bookings() {
      return this.$store.state.bookings;
    },
  },
  methods: {
    createNotification(id) {
      this.$router.push({ name: "BookingAlertCreate", params: { id } });
    },
  },
};
</script>
