const weatherData = []

function weatherPromise() {
    let location = '96093'
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=4CCU3Y3NC2NWGPLQ9R6Z52RLU`)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            const rawData = response
            weatherData.push(rawData.currentConditions)
        })
        .catch(function(error){
            console.log(error)
        })
}

(function formData(){
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = new FormData(form)
        const address = data.get('addinput')
        console.log(address)
    })
})();

// weatherPromise()

console.log(weatherData)