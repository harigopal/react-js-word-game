/** @jsx React.DOM */

//var mountNode = document.getElementById('mount-node');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Duplicator = React.createClass({
  getInitialState: function() {
    return {value: 'Nothing has been typed yet.'};
  },
  handleChange: function() {
    this.setState({value: this.refs.input.getDOMNode().value});
  },
  render: function() {
    return (
      <div>
        <input
          ref='input'
          onChange={this.handleChange} />
        <h3>Duplicate</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.value
          }}
        />
      </div>
    )
  }
});

//React.renderComponent(<HelloMessage name="John" />, mountNode);
