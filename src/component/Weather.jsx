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
				return <h3>Fetching Weather...</h3>;
			}
			else if(temp && weather){
				return <p>It's {temp} C in {weather}</p>;
			}
		}
		return(
			<div>
				<h3>Get Weather </h3>
				<form onSubmit={this.handleChange}>
					<input type="text" ref="weather"/>
					<button>Submit</button>
				</form>
				{loadingComponent()}
			</div>
			);
	}
});

module.exports = Weather;