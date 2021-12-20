<template>
  <h1>Bookings</h1>
  <BookingCard
    v-for="booking in bookings"
    :key="booking.id"
    :booking="booking"
  />
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
};
</script>
