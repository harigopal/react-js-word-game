/** @jsx React.DOM */

var CommonMixin = {
  outputStyle: function (successState) {
    return {
      backgroundColor: successState ? '#66FF66' : 'default'
    }
  },
  render: function () {
    return (
      <div>
        <input
        ref='input'
        onChange={this.handleChange} />
        <p style={this.outputStyle(this.state.succeeded)}>{this.state.value}</p>
      </div>
      )
  }
};

var Duplicator = React.createClass({
  mixins: [CommonMixin],
  getInitialState: function () {
    return { value: 'Nothing has been typed yet.', succeeded: false };
  },
  handleChange: function () {
    var newValue = this.refs.input.getDOMNode().value
    this.setState({value: newValue});

    if (newValue === 'Hello world!') {
      this.setState({succeeded: true});
    }
  }
});

var Reverser = React.createClass({
  mixins: [CommonMixin],
  getInitialState: function () {
    return { value: 'Start typing!', succeeded: false };
  },
  handleChange: function () {
    var newValue = this.refs.input.getDOMNode().value.split("").reverse().join("");
    this.setState({value: newValue});

    if (newValue === 'I think, therefore I am.') {
      this.setState({succeeded: true});
    }
  }
});
