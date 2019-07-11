import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";
import { Link } from "react-router-dom";

import "./Button.scss";

export default class Button extends Component {
  renderButton = () => {
    const { buttonText, buttonLink } = this.props;
    const buttonStyle =
      this.props.buttonColour && this.props.buttonOutline
        ? `btn-outline-${this.props.buttonColour}`
        : `btn-${this.props.buttonColour}`;
    const buttonSize = this.props.buttonSize
      ? `btn-${this.props.buttonSize}`
      : `btn-md`;
    const buttonBlock = this.props.buttonBlock ? `btn-block` : ``;

    if (buttonLink) {
      return (
        <Link
          to={buttonLink + ".html"}
          className={`btn ${buttonStyle} ${buttonBlock} ${buttonSize}`}>
          {buttonText}
        </Link>
      );
    } else if (buttonText) {
      return (
        <button
          type='button'
          className={`btn ${buttonStyle} ${buttonBlock} ${buttonSize}`}
          onClick={() => console.log(buttonText)}>
          {buttonText}
        </button>
      );
    } else {
      return (
        <button type='button' className='btn btn-info'>
          New Button
        </button>
      );
    }
  };
  render() {
    console.log(this.props);

    return this.renderButton();
  }
}

MapTo("wknd-events/components/content/button")(Button);
