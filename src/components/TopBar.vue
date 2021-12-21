<template>
  <div class="top-bar">
    <div class="logo">
      <img
        src="https://briq.app/image/7619/ee0c0574-34d7-4a1f-b8c1-733bd3f9852e.jpg"
        alt="Briq Bookings"
      />
    </div>
    <div class="stats">
      <h3>Made:</h3>
      <span>Today: {{ stats.kpis.bookings.madeThisDay }}</span>
      <span>This Week: {{ stats.kpis.bookings.madeThisWeek }}</span>
    </div>
    <div class="stats">
      <h3>How Busy:</h3>
      <span>Today: {{ stats.kpis.howBusyIsItFactor.thisDay }}</span>
      <span>This Week: {{ stats.kpis.howBusyIsItFactor.thisWeek }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    stats: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid rgb(39, 37, 37);
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #f7f7f7;
}
.stats span {
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
}
.stats h3 {
  margin-top: 0;
}
</style>
