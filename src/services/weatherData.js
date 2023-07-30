
const havaDurumu = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=76377b17ad9606364be049daedf29628&lang=tr&units=metric`;

    return fetch(url)
        .then((response) => response.json());

};

export { havaDurumu };