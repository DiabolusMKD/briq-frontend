<template>
  <div>Create Booking Notification</div>
  <form @submit.prevent="onSubmit">
    <textarea
      cols="30"
      rows="10"
      placeholder="Enter a message here"
      v-model="notification.reason"
    >
    </textarea>
    <button type="button" @click="$router.go(-1)">Cancel</button>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "BookingAlertCreate",
  props: {
    id: String,
  },
  data() {
    return {
      notification: {
        bookingId: this.id,
        reason: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.notification.reason == "") {
        alert("You have to submit a message");
        return;
      }

      this.$store
        .dispatch("createBookingNotification", this.notification)
        .then(() => {
          this.$router.push({
            name: "BookingList",
          });
        })
        .catch((error) => {
          this.$router.push({
            name: "ErrorDisplay",
            params: { error: error },
          });
        });
    },
  },
};
</script>
