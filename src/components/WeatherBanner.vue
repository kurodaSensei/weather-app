<template>
  <div class="weather__banner" v-if="weather">
    <div class="weather__hero">
      <div class="weather__info">
        <h2>{{weather.name}}</h2>
        <ul>
          <li>Nubosidad: {{weather.clouds.all}}%</li>
          <li>Húmedad: {{weather.main.humidity}}%</li>
          <li>Visibilidad: {{visibility}}</li>
        </ul>
      </div>
    </div>
    <div class="weather__widget">
      <div class="weather-widget__icon">
        <img :src="weatherIcon" alt srcset />
      </div>
      <div class="weather-widget__temp">
        <h1>
          {{weather.main.temp}}
          <span>&#8451;</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      weather: null
    };
  },
  computed: {
    ...mapState(["currentWeather"]),
    visibility: function() {
      return `${this.weather.visibility / 1000}Km`;
    },
    weatherIcon: function() {
      return `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
    }
  },
  methods: {
    async getCurrentWeather() {
      await this.$store.dispatch("fetchCurrentWeather", "Bogotá");
    }
  },
  watch: {
    currentWeather(newValue, oldValue) {
      this.weather = oldValue ? JSON.parse(oldValue) : JSON.parse(newValue);

      console.log(this.weather);
    }
  },
  mounted() {
    this.getCurrentWeather();
  }
};
</script>

<style>
</style>