<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mx-auto mt-5 box">
                <div class="data">
                    <h2 class="header_font">Hava Durumu</h2>
                    <p class="header_font_p">Güncellenme Zamanı : {{ hours }}.{{ minute }}</p>
                    <h3 class="font" style="font-size: 25px;">{{ havaBilgisi.name }}</h3>
                    <h2 class="font_temp">{{ formattedFeelsLike }} °C</h2>
                    <p style="color: #d1d8e0; font-size: 12px; text-align: center; margin-bottom: 10px;">{{ formattedTempMax }} °C /
                        {{formattedTempMin }} °C </p>
                    <p class="font" style="font-size: 20px; margin-bottom: 10px;">{{ havaBilgisi.weather[0].description }}</p>
                </div>
                <!-- input alanı -->
                <div class="input">
                    <input v-model="cityName" class="form-control form-control-sm input op_input" type="text"
                        placeholder="Malatya" aria-label=".form-control-sm example">
                    <div class="d-grid gap-2">
                        <button @click="getWeatherData" class="btn btn-custom mt-2 btn-custom:hover"
                            type="submit">Göster</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cityName: "",
            dateTime: "",
            hours: "",
            minute: "",
        }
    },
    props: ["havaBilgisi"],
    methods: {
        getWeatherData() {
            this.$emit("citySelected", this.cityName)
            this.dateTime = new Date()
            this.hours = this.dateTime.getHours()
            this.minute = this.dateTime.getMinutes()
        }
    },
    computed: {
        formattedFeelsLike() {
            return Math.round(this.havaBilgisi.main.feels_like);
        },
        formattedTempMax() {
            return Math.round(this.havaBilgisi.main.temp_max);
        },
        formattedTempMin() {
            return Math.round(this.havaBilgisi.main.temp_min);
        }
    },
}
</script>

<!-- Mauro Emanuel Icardi Rivero  -->

