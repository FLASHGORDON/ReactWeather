var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var Errmsg = React.createClass({
    getDefaultProps:function(){
        return{
            title:'Error'
        };
    },
    propTypes:{
        title:React.PropTypes.string,
        message:React.PropTypes.string.isRequired
    },
    componentDidMount:function(){
       var {title,message} = this.props;
       var modalmarkup = (
           <div id="error-modal" className="reveal tiny text-center hollow" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="button hollow" data-close="">Okay</button>
            </div>
            
        );
        var $modal = $(ReactDOMServer.renderToString(modalmarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render:function(){
        return(
            <div>
            </div>
        );
    }
});

module.exports= Errmsg;