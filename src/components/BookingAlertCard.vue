<template>
  <div class="alert-card">
    <span>BookingId: {{ alert.bookingId }}</span>
    <br />
    <span>Reason: {{ alert.reason }}</span>
    <br />
    <span>Created at: {{ alert.timestamp }}</span>
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
