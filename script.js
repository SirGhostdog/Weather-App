const weatherData = []

function weatherPromise(location) {
     fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=4CCU3Y3NC2NWGPLQ9R6Z52RLU`)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            const rawData = response
            weatherData.push(rawData.currentConditions)
            addItemToPage()
        })
        .catch(function(error){
            console.log(error)
        })
}



(function formData(){

    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {

        weatherData.length = 0
        event.preventDefault()
        const data = new FormData(form)
        const address = data.get('addinput')
        weatherPromise(address)
        // console.log(weatherData)
    })
})();

function addItemToPage() {

    if (weatherData.length === 0) return;

    const current = weatherData[0];

    const tempEl = document.getElementById('temperature')
    if (tempEl) tempEl.textContent = current.temp

    const maxEl= document.getElementById('maximum')
    if (maxEl) maxEl.textContent = current.feelslike

    const minEl= document.getElementById('minimum')
    if (minEl) minEl.textContent = current.precip + "%"

    const humidEl= document.getElementById('humid')
    if (humidEl) humidEl.textContent = current.humidity + "%"

    const condEl= document.getElementById('cond')
    if (condEl) condEl.textContent = current.conditions
}