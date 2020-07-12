<template>
  <div class="weather__location" v-if="weather">
    <div class="weather-location__weather">
      <div class="weather-location__icon">
        <img :src="weatherIcon" alt srcset />
      </div>
      <div class="weather-location__temp">
        <h2>
          {{weather.main.temp.toFixed(0)}}
          <span>&#8451;</span>
        </h2>
        <div class="divider"></div>
        <h2>{{weather.name}}</h2>
      </div>
    </div>
    <div class="weather-location__info">
      <span>Húmedad: {{weather.main.humidity}}%</span>
      <span>Nubosidad: {{weather.clouds.all}}%</span>
      <span>Viento: {{weather.wind.speed}}Km/h</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    city: String
  },
  data() {
    return {
      weather: null
    };
  },
  computed: {
    ...mapState(["locationWeather"]),
    visibility: function() {
      return `${this.weather.visibility / 1000}Km`;
    },
    weatherIcon: function() {
      return `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
    }
  },
  methods: {
    async getLocationWeather() {
      let weather = await this.$store.dispatch(
        "fetchLocationWeather",
        this.city
      );
      console.log(weather);
    }
  },
  watch: {
    locationWeather(newValue, oldValue) {
      if (newValue != oldValue) {
        this.weather = JSON.parse(newValue);
      }

      console.log(this.weather);
    }
  },
  created() {
    this.getLocationWeather();
  }
};
</script>

<style>
.divider {
  width: 0px;
  height: 60%;
  margin: auto 0;
  border: 1px solid #cccccc;
}
</style>