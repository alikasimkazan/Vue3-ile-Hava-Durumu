<template>
  <div v-if="startBtn" class="d-grid gap-2 col-6 mx-auto">
    <button @click="showHide" class="btn btn-start">Hava Durumunu Göster</button>
  </div>
  <weatherView @citySelected="fetchWeatherData" :havaBilgisi="havaBilgisi" v-if="showComp" />
</template>

<script>
import { havaDurumu } from "./services/weatherData"
import weatherView from "./components/weatherView.vue"

export default {
  name: 'App',
  components: { weatherView },
  data() {
    return {
      havaBilgisi: {},
      defaultCity: "Malatya",
      showComp: false,
      startBtn: true,
    }
  },
  mounted() {
    this.fetchWeatherData(this.defaultCity)
  },
  methods: {
    fetchWeatherData(cityName) {
      havaDurumu(cityName)
        .then((data) => {
          this.havaBilgisi = data;
          console.log(data);
        })
        .catch((err) => console.log(err));
    },
    showHide() {
      this.showComp = !this.showComp
      this.startBtn = !this.startBtn
    }
  }
}
</script>

<style></style>
