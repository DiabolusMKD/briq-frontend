<template>
  <div class="booking-card">
    <span>Booked @{{ booking.bookedAt }}</span>
    <br />
    <span>For date: {{ booking.date }} - {{ booking.time }}</span>
    <h4>Name: {{ booking.name }}</h4>
    <p>Group Size: {{ booking.groupSize }}</p>
    <span>Deals: </span>
    <ul>
      <li v-for="(deal, key) in booking.deals" :key="key">{{ deal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookingCard",
  props: {
    booking: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.booking-card {
  border: 1px solid #000;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
