var React = require("react");
var Navbar = require("./navbar.jsx");

var Main = (props) =>{
	return(
		<div>
		<Navbar/>
		<h1>Main component</h1>
		{props.children}
		</div>
	);
}

module.exports=Main;