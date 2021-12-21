<template>
  <div class="success-message">
    {{ notification_message }}
  </div>
</template>

<script>
export default {
  name: "NotificationMessage",
  props: {
    notification_message: String,
  },
};
</script>

<style scoped>
.success-message {
  background-color: rgba(66, 185, 131, 0.7);
  color: #fff;
  font-size: 2rem;
  border-radius: 5px;
  padding: 10px;
}
</style>
