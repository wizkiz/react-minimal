import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

export default class ButtonPanel extends React.Component {
  // static propTypes = {
  //   clickHandler: PropTypes.func,
  // };

  // handleClick = buttonName => {
  //   this.props.clickHandler(buttonName);
  // };    

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <h1><Button name="allStudents"/></h1>
          <h1><Button name="sortStudents"/></h1>
          <h1><Button name="oldStudents"/></h1>
        </div>
      </div>
    );
  }
}
