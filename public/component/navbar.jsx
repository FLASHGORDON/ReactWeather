var React = require('react');
var {Link,IndexLink} = require('react-router');

var navbar = React.createClass({
	onSearch :function(e){
		e.preventDefault();
		alert("not implemented yet");

	},
	render:function(){
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
							<li className="menu-text">React Weather</li>
							<li><IndexLink to="/" activeClassName= "active" activeStyle={{fontWeight:'bold'}}> Get Weather</IndexLink></li>
							<li><Link to="/about" activeClassName= "active" activeStyle={{fontWeight:'bold'}}> About </Link></li>
							<li><Link to ="/examples" activeClassName= "active" activeStyle={{fontWeight:'bold'}}>Examples </Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul class="menu">
						<li><input type="search" placeholder="Location" ref="location"/></li>
						<li><button type="button" class="button" onClick={this.onSearch}>Get Weather</button></li>
					</ul>
				</div>
			</div>

			);
	}
});

module.exports = navbar;