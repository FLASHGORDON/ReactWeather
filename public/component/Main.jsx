var React = require("react");
var Navbar = require("./navbar.jsx");

var Main = (props) =>{
	return(
		<div>
		<Navbar/>
			<div className="row">
				<div className="medium-5 large-5 small-centered columns">{props.children}</div>
				
			</div>
		</div>
	);
}

module.exports=Main;