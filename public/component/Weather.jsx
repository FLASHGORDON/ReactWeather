var React = require('react');
var opa = require('../../api/opa.jsx'); 
var Errmsg = require('./modal.jsx');

var Weather = React.createClass({
	getInitialState:function() {
		return{
			isLoading:false
		};
	},
	changeWeather:function(weather){
		var that = this;

		this.setState({
			isLoading:true,
			errorMessage:undefined
		});
		opa.getTemp(weather).then((temp)=>{
			that.setState({
				weather:weather,
				temp:temp,
				isLoading:false 
			});
		},(e)=>{
			//alert(errormessage);
			that.setState({
				isLoading:false,
				errorMessage:e.message 
			});
		});
	},
	handleChange:function(e){
		e.preventDefault();
		this.changeWeather(this.refs.weather.value);
	},
	render:function(){
		var {temp,weather,isLoading,errorMessage} = this.state;

		function loadingComponent(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>;
			}
			else if(temp && weather){
				return <h3 className="text-center">It's {temp} C in {weather}</h3>;
			}
		}
		function errmessage(){
			if(typeof errorMessage === 'string'){
				return(
					<Errmsg message={errorMessage}/>
				);
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
					{errmessage()}				
			</div>
			);
	}
});

module.exports = Weather;
