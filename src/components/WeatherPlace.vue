<template>
  <div class="weather__place">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h3>
          <strong>Place to</strong> Visit
        </h3>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="weather-place__reviewers">
          <h4>Top reviewers</h4>
          <div class="weather-place__reviewers-photos">
            <img src="../static/user1.jpeg" alt />
            <img src="../static/user2.jpeg" alt />
            <img src="../static/user3.jpeg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="weather-place__image weather-place__image--large" :style="style">
          <div class="weather-place__name">
            <h4>Medellín</h4>
            <h4>Antioquia</h4>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="weather-place__image weather-place__image--short" :style="style">
          <div class="weather-place__name">
            <h4>Medellín</h4>
            <h4>Antioquia</h4>
          </div>
        </div>
        <div class="weather-place__image weather-place__image--mid" :style="style">
          <div class="weather-place__name">
            <h4>Medellín</h4>
            <h4>Antioquia</h4>
          </div>
          <button class="weather-place__button">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      place: require("../static/medellin.jpeg")
    };
  },
  computed: {
    style: function() {
      return `background-image: url(${this.place})`;
    }
  }
};
</script>

<style>
</style>