var axios = require('axios');

const OPEN_WEATHER_MAP_URL= "http://api.openweathermap.org/data/2.5/weather?appid=37323343bee6b49cf6cbc49994192242&units=metric";


module.exports = {
	getTemp : function(location){
		var encodedurl = encodeURIComponent(location);;
		var requrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedurl}`;

		return axios.get(requrl).then((res)=>{
			
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else{
				return res.data.main.temp;
			}

		}, (err)=>{
			throw new Error(err.data.message);
		});
	}
}