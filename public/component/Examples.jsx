var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
	render:function(){
		return(
			<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are few examples to try out:</p>
			<ol>
				<li><Link to ="/?location=Lucknow" >Lucknow, India </Link></li>
				<li><Link to ="/?location=Mumbai" >Mumbai, India </Link></li>
			</ol>
			</div>
			);
	}
});

module.exports = Examples;