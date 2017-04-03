var React = require('react');

var About = React.createClass({
	render:function(){
		return(
			<div>
				<h1 className="text-center">About</h1>
				<p>This is a Webapp coded in React to tell the weather of a specified location.</p>
				<p>ReactWeather uses JSX, Webpack and Foundation framework.</p>
			</div>
			);
	}
});

module.exports = About;