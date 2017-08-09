import React, { Component } from "react";
import PropTypes from "prop-types";

const style = {
  background: "none",
  border: "none",
  color: "inherit",
  cursor: "pointer",
  fontSize: "3vh",
  height: "7em",
  margin: "1em",
  outline: "none",
  width: "7em",
};

const iconStyle = {
  height: "4em",
  margin: "0.5em",
};

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button style={style} onClick={this.props.onClick}>
        <img src={this.props.icon} style={iconStyle} />
        {this.props.children}
      </button>
    );
  }
}

export default Button;
