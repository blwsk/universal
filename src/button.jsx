import React from 'react';

const Button = React.createClass({

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  },

  componentDidMount() {
    this.setState({
      count: this.props.count
    });
  },

  getInitialState() {
    return {count: 0}
  },

  render() {

    return (
      <button onClick={this.increment}>{this.state.count}</button>
    );
  }

}); 

export default Button;