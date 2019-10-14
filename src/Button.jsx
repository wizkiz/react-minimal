import React from "react";
import PropTypes from "prop-types";
import data from "./App";
import clickButton from "./clickButton"


export default class Button extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    //console.log("XD");
    clickButton(this.props.name);
  };    

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

