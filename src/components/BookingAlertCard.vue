<template>
  <div class="alert-card">
    <p>
      <span class="card-title">BookingId:</span>
      <span class="card-value">{{ alert.bookingId }}</span>
    </p>
    <p>
      <span class="card-title">Reason:</span>
      <span class="card-value">{{ alert.reason }}</span>
    </p>
    <p>
      <span class="card-title">Created at:</span>
      <span class="card-value">{{ alert.timestamp }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "BookingAlertCard",
  props: {
    alert: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.alert-card {
  border: 1px solid #000;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
