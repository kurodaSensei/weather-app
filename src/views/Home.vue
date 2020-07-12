<template>
  <div class="weather__main">
    <div class="weather__container">
      <weather-banner></weather-banner>
      <div class="row">
        <div class="col-lg-8 col-xs-12">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <weather-forecast></weather-forecast>
            </div>
            <div class="col-md-8 col-xs-12">
              <weather-place></weather-place>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12 weather__locations">
          <weather-location city="Paris"></weather-location>
          <weather-location city="New York"></weather-location>
          <div class="weather__add-locations">
            <button>Add Locations</button>
            <img src="../static/urban.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherBanner from "../components/WeatherBanner";
import WeatherForecast from "../components/WeatherForecast";
import WeatherPlace from "../components/WeatherPlace";
import WeatherLocation from "../components/WeatherLocations";
export default {
  name: "Home",
  components: {
    WeatherBanner,
    WeatherForecast,
    WeatherPlace,
    WeatherLocation
  }
};
</script>
