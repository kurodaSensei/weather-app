<template>
  <div class="weather__forecast" v-if="forecast">
    <h3>
      <strong>3 Days</strong> Forecast
    </h3>
    <div class="row">
      <div
        class="col-12 weather-forecast__item"
        v-for="(daily, index) in forecast.daily.slice(1,4)"
        :key="index"
      >
        <div class="weather-forecast__weather">
          <img :src="icon(daily.weather[0].icon)" alt srcset />
          <div>
            <span>
              <strong>{{day(daily.dt)}}</strong>
            </span>
            <span>{{daily.weather[0].main}}</span>
          </div>
        </div>
        <div
          class="weather-forecast__temp"
        >{{daily.temp.max.toFixed(0)}}˚ / {{daily.temp.min.toFixed(0)}}˚</div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      forecast: null,
      lat: null,
      lng: null
    };
  },
  computed: {
    ...mapState(["forecastWeather", "currentWeather"])
  },
  methods: {
    async getForecastWeather() {
      let current = JSON.parse(this.$store.getters["getCurrentWeather"]);
      console.log(current.coord);

      let weather = await this.$store.dispatch(
        "fetchForecastWeather",
        current.coord
      );
      console.log(weather);
    },
    day(time) {
      return moment.unix(time).format("dddd");
    },
    icon(name) {
      return `http://openweathermap.org/img/w/${name}.png`;
    }
  },
  watch: {
    forecastWeather(newValue, oldValue) {
      if (newValue != oldValue) {
        this.forecast = JSON.parse(newValue);
      }
      console.log(this.forecast);
    },
    currentWeather() {
      this.getForecastWeather();
    }
  },
  mounted() {}
};
</script>

<style>
</style>