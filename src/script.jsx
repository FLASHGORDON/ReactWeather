var React = require("react");
var ReactDOM = require("react-dom");

var {Route,Router,IndexRoute,hashHistory} = require("react-router");
var Main = require("./component/Main.jsx");
var Weather = require("./component/Weather.jsx");
var About = require("./component/About.jsx");
var Examples = require("./component/Examples.jsx");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component = {About}/>
			<Route path="examples" component = {Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('template')
);