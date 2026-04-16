const weatherData = []

function weatherPromise() {
    let location = '75087'
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

function formData(){

}

weatherPromise()

console.log(weatherData)