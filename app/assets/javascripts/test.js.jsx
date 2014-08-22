/** @jsx React.DOM */

var outputStyle = function (successState) {
  if (successState) {
    return {
      backgroundColor: '#66FF66'
    }
  } else {
    return {
      backgroundColor: 'default'
    }
  }
};

var resultRenderer = function () {
  return (
    <div>
      <input
      ref='input'
      onChange={this.handleChange} />
      <p style={outputStyle(this.state.succeeded)}>{this.state.value}</p>
    </div>
    )
};

var Duplicator = React.createClass({
  getInitialState: function () {
    return { value: 'Nothing has been typed yet.', succeeded: false };
  },
  handleChange: function () {
    var newValue = this.refs.input.getDOMNode().value
    this.setState({value: newValue});

    if (newValue === 'Hello world!') {
      this.setState({succeeded: true});
    }
  },
  render: resultRenderer
});

var Reverser = React.createClass({
  getInitialState: function () {
    return { value: 'Start typing!', succeeded: false };
  },
  handleChange: function () {
    var newValue = this.refs.input.getDOMNode().value.split("").reverse().join("");
    this.setState({value: newValue});

    if (newValue === 'I think, therefore I am.') {
      this.setState({succeeded: true});
    }
  },
  render: resultRenderer
});
