const fetch = require("node-fetch");
let ciudades = ["Tokio", "Nueva York", "Los Angeles", "Paris", "Seul", "Londres", "Moscu", "Osaka", "Shanghai", "Chicago"];
let seleccionados = [];
function main() {

    for (let i = 0; i < 3; i++) {
        let ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
    if (seleccionados.indexOf(ciudad) !=-1){continue;} else {seleccionados.push(ciudad);}
    
       
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=1b5557afd2195d9941b3546d37cd1cc1&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(ciudad)
                console.log(data.main.feels_like)
            })
            .catch(error => {
                console.log("Ha ocurrido un error")
                console.log(error)
            })
    }
}
main();
