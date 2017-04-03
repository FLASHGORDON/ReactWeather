var React = require('react');
var opa = require('../../api/opa.jsx'); 

var Weather = React.createClass({
	getInitialState:function() {
		return{
			isLoading:false
		};
	},
	changeWeather:function(weather){
		var that = this;

		this.setState({
			isLoading:true 
		});
		opa.getTemp(weather).then((temp)=>{
			that.setState({
				weather:weather,
				temp:temp,
				isLoading:false 
			});
		},(errormessage)=>{
			alert(errormessage);
			that.setState({
				isLoading:false 
			});chennai
		});
	},
	handleChange:function(e){
		e.preventDefault();
		this.changeWeather(this.refs.weather.value);
	},
	render:function(){
		var {temp,weather,isLoading} = this.state;

		function loadingComponent(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>;
			}
			else if(temp && weather){
				return <h3 className="text-center">It's {temp} C in {weather}</h3>;
			}
		}
		return(
			<div>
					<h1 className="text-center">Get Weather </h1>
					<form onSubmit={this.handleChange}>
						<input type="text" ref="weather"/>
						<button className="hollow button expanded">Submit</button>
					</form>
					{loadingComponent()}				
			</div>
			);
	}
});

module.exports = Weather;
