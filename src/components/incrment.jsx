import React, { Component } from "react";
import "./index.scss";

export default class Incrment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Surname: "",
      count: 0,
    };
  }
  render() {
    const handleincrment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const handledicrement = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };
    const onChange = (e) => {
      console.log(e.target.value);
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div className="wrapper">
        <div className="continer">
          <button onClick={handledicrement}>-</button>
          <button>{this.state.count}</button>
          <button onClick={handleincrment}>+</button>
          <h1>name:{this.state.name}</h1>
          <h1>Surname:{this.state.Surname}</h1>
        </div>

        <input
          name="name"
          onChange={onChange}
          type="text"
          placeholder="Name"
          value={this.state.name}
        />
        <input
          name="Surname"
          onChange={onChange}
          type="text"
          placeholder="Surname"
          value={this.state.Surname}
        />
      </div>
    );
  }
}
