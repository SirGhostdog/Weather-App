const weatherData = []

function weatherPromise() {
    let location = '75087'
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=4CCU3Y3NC2NWGPLQ9R6Z52RLU`)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
}

weatherPromise()