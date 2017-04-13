var api ={
    getWeather(zipcode){
        // const key = "e764a6261a40993c03312c42b3364abb",
        // query = "84015",
        // url = `http://api.openweathermap.org/data/2.5/weather?zip=${query}&units=imperial&appid=${key}`;
        //http://api.openweathermap.org/data/2.5/weather?zip=84015&units=imperial&appid=e764a6261a40993c03312c42b3364abb

        return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=e764a6261a40993c03312c42b3364abb`)
                .then((res)=>res.json());
                
                      }
    }   

module.exports = api;