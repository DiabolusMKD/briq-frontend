<template>
  <div class="booking-card">
    <h2>Name: {{ booking.name }}</h2>
    <p>
      <span class="card-title">Booked at:</span>
      <span class="card-value">{{ booking.bookedAt }}</span>
    </p>
    <p>
      <span class="card-title">For date:</span>
      <span class="card-value">{{ booking.date }} - {{ booking.time }}</span>
    </p>
    <p>
      <span class="card-title">Group Size:</span>
      <span class="card-value">{{ booking.groupSize }}</span>
    </p>
    <p>
      <span class="card-title">Deals: </span>
      <span class="card-value">
        <ul>
          <li v-for="(deal, key) in booking.deals" :key="key">{{ deal }}</li>
        </ul>
      </span>
    </p>
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
