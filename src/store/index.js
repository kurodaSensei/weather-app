import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apiKey: "64f29439f556f7b071163c59d982220a",
        currentWeather: null,
        locationWeather: null,
        forecastWeather: null,
    },
    mutations: {
        setCurrentWeather(state, weather) {
            state.currentWeather = weather;
        },
        setLocationWeather(state, weather) {
            state.locationWeather = weather;
        },
        setForecastWeather(state, weather) {
            state.forecastWeather = weather;
        }
    },
    getters: {
        getCurrentWeather(state) {
            return state.currentWeather;
        },
        getLocationWeather(state) {
            return state.locationWeather;
        },
        getForecastWeather(state) {
            return state.forecastWeather;
        }
    },
    actions: {
        async fetchCurrentWeather(vuexContext, city) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vuexContext.commit('setCurrentWeather', xmlHttp.responseText);
            }
            xmlHttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${vuexContext.state.apiKey}`, true); // true for asynchronous 
            xmlHttp.send(null);
        },
        async fetchLocationWeather(vuexContext, city) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vuexContext.commit('setLocationWeather', xmlHttp.responseText);
                return xmlHttp.responseText;
            }
            xmlHttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${vuexContext.state.apiKey}`, true); // true for asynchronous 
            await xmlHttp.send(null);
        },
        async fetchForecastWeather(vuexContext, coord) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vuexContext.commit('setForecastWeather', xmlHttp.responseText);
                return xmlHttp.responseText;
            }
            xmlHttp.open("GET", `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly&units=metric&appid=${vuexContext.state.apiKey}`, true); // true for asynchronous 
            await xmlHttp.send(null);
        }
    },
})