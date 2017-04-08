var React = require('react');
var {Link,IndexLink} = require('react-router');

var navbar = React.createClass({
	onSearch :function(e){
		var loca = this.refs.loc.value;
		var encodedUR = encodeURIComponent(loca);

		if(loca.length >0){
			this.refs.loc.value="";
			window.location.hash="#/?location="+encodedUR;
		}

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
					<form onSubmit={this.onSearch}>
					<ul class="menu">
						<li><input type="search" placeholder="Location" ref="loc"/></li>
						<li><button type="submit" class="button" onClick={this.onSearch}>Get Weather</button></li>
					</ul>
					</form>
				</div>
			</div>

			);
	}
});

module.exports = navbar;