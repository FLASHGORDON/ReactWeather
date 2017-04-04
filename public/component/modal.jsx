var React = require('react');

var Errmsg = React.createClass({
    componentDidMount:function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render:function(){
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>Some text and</h4>
                <p>Our message</p>
                <button className="button hollow" data-close>Okay</button>
            </div>
        );
    }
});

module.exports= Errmsg;