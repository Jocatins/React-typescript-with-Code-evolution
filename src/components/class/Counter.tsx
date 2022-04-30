import React, { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  initialState: number;
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
    initialState: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  resetClick = () => {
    this.setState((prevState) => ({ count: 0 }));
  };
  render() {
    return (
      <div>
        Counter
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.resetClick}>Reset Count</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
