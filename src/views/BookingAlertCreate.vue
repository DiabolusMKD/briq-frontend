<template>
  <h1>Create Booking Notification</h1>
  <div class="create-notification">
    <form @submit.prevent="onSubmit">
      <textarea
        cols="30"
        rows="10"
        placeholder="Enter a message here"
        v-model="notification.reason"
      >
      </textarea>
      <div class="buttons">
        <button type="submit" class="submit">Submit</button>
        <button type="button" class="cancel" @click="$router.go(-1)">
          Cancel
        </button>
      </div>
    </form>
  </div>
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

<style scoped>
.create-notification {
  display: flex;
  justify-content: center;
  align-items: center;
}
textarea {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  font-size: 1rem;
  resize: none;
  margin: 1rem auto;
}
.buttons button {
  width: 100%;
  margin-bottom: 1rem;
  height: 3rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
}
.buttons .cancel {
  background-color: #d1d1d1;
}
.buttons .cancel:hover {
  background-color: rgba(209, 209, 209, 0.7);
}
.buttons .submit {
  background-color: #42b983;
  color: #fff;
}
.buttons .submit:hover {
  background-color: rgba(66, 185, 131, 0.7);
}
</style>
